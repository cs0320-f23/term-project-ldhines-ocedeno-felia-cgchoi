import {FC, useState, useEffect} from "react";
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Stack,
    TextField,
    Select,
    FormControl,
    InputLabel,
    MenuItem,
    FormControlLabel,
    Checkbox, FormGroup
} from "@mui/material";
import Button from "@components/shared/Button";
import {useForm} from "react-hook-form";
import QueueAPI, {CreateQueueRequest, MaskPolicy} from "@util/queue/api";
import CourseAPI, {Course} from "@util/course/api";
import {useSession} from "@util/auth/hooks";
import {toast} from "react-hot-toast";
import errors from "@util/errors";
import {getNextHours} from "@util/shared/getNextHours";

export interface CreateQueueDialogProps {
    open: boolean;
    onClose: () => void;
}

type FormData = {
    title: string;
    project: string;
    description: string;
    location: string;
    courseID: string;
    endTimeIndex: number;
    allowTicketEditing: boolean;
    showMeetingLinks: boolean;
    rejoinCooldown: number;
    faceMaskPolicy: MaskPolicy;
};


const CreateQueueDialog: FC<CreateQueueDialogProps> = ({open, onClose}) => {
    const [numOfQueues, setNumOfQueues] = useState(0);

    const times = getNextHours();
    const {register, handleSubmit, reset, formState: {}} = useForm<FormData>();
    const [isLoading, setIsLoading] = useState(false);
    const onSubmit = handleSubmit(data => {
        setIsLoading(true);
        const req: CreateQueueRequest = {
            ...data,
            // @ts-ignore
            faceMaskPolicy: parseInt(data.faceMaskPolicy),
            // @ts-ignore
            rejoinCooldown: parseInt(data.rejoinCooldown),
            endTime: times[data.endTimeIndex].timestamp
        };
        toast.promise(QueueAPI.createQueue(req), {
            loading: "Creating queue...",
            success: "Queue created",
            error: errors.UNKNOWN,
        })
            .then(async () => {
                await CourseAPI.updateProjectQueueFeatures(data.courseID, data.project);
                reset();
                onClose();
            })
            .catch(() => setIsLoading(false));
    });
    const {currentUser, loading} = useSession();
    const [coursePerms, setCoursePerms] = useState<Course[]>([]);
    const [courseProjects, setCourseProjects] = useState<string[]>([]);

    useEffect(() => {
        if (currentUser && currentUser.coursePermissions)
            Promise.all(Object.keys(currentUser.coursePermissions)
                .map(c => CourseAPI.getCourse(c)))
                .then(res => setCoursePerms(res));
    }, [currentUser]);
    
    useEffect(() => {
        if (currentUser && currentUser.coursePermissions) {
            Promise.all(
                Object.keys(currentUser.coursePermissions)
                    .map(courseID => CourseAPI.getCourseProjectNames(courseID))
            )
            .then(res => {
                const courseProjectList = res.flat();
                console.log("testing" + courseProjectList)
                setCourseProjects(courseProjectList);
            })
            .catch(error => {
                console.error("There was an error loading the projects: ", error);
            });
        }
    }, [currentUser]);

   
    
    // useEffect(() => {
    //     const fetchProjects = async () => {
    //         const fetchedProjects = await CourseAPI.getCourseProjects(); // Replace with your actual API call to Firestore
    //         setProjects(fetchedProjects);
    //     };

    //     fetchProjects();
    // }, []); 

    if (loading) return <></>

    return <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm" keepMounted={false}>
        <form onSubmit={onSubmit}>
            <DialogTitle>Start Queue</DialogTitle>
            <DialogContent>
                <Stack spacing={2.5} my={1}>
                    <FormControl fullWidth size="small" variant="standard" required>
                        <InputLabel id="course-select-label">Course</InputLabel>
                        <Select
                            {...register("courseID")}
                            required
                            defaultValue={coursePerms.length > 3 ? coursePerms[3].id : ""}
                            fullWidth
                            labelId="course-select-label"
                            id="course-select"
                            label="Course"
                            type="text"
                        >
                            {coursePerms.map(x => <MenuItem key={x.id}
                                                            value={x.id}>{`${x.code}: ${x.title} (${x.term})`}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <TextField
                        {...register("title")}
                        required
                        autoFocus
                        label="Title"
                        type="text"
                        fullWidth
                        size="small"
                        variant="standard"
                    />
                    <FormControl fullWidth size="small" variant="standard">
                        <InputLabel id="course-select-label">Project</InputLabel>
                        <Select
                            {...register("project")}
                            required
                            defaultValue={courseProjects.length > 3 ? courseProjects[3] : ""}
                            fullWidth
                            labelId="project-select-label"
                            id="project-select"
                            label="Project"
                            type="text"
                        >
                            {courseProjects.map((projectName, index) => (
                                <MenuItem key={index} value={projectName}>
                                    {projectName}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    {/* <TextField
                        {...register("project")}
                        required
                        autoFocus
                        label="Project"
                        type="text"
                        fullWidth
                        size="small"
                        variant="standard"
                    /> */}
                    <Stack direction="row" spacing={1.5}>
                        <TextField
                            {...register("location")}
                            required
                            label="Location"
                            type="text"
                            fullWidth
                            size="small"
                            variant="standard"
                        />
                        <FormControl fullWidth size="small" variant="standard">
                            <InputLabel id="course-select-label" required>End time</InputLabel>
                            <Select
                                {...register("endTimeIndex")}
                                required
                                defaultValue={0}
                                fullWidth
                                labelId="time-select-label"
                                id="time-select"
                                label="End time"
                                type="text"
                            >
                                {times.map((time, i) => <MenuItem key={time.time} value={i}>{time.time}</MenuItem>)}
                            </Select>
                        </FormControl>
                    </Stack>
                    <TextField
                        {...register("description")}
                        label="Description"
                        type="text"
                        fullWidth
                        size="small"
                        variant="standard"
                    />
                    <Stack direction="row" spacing={1.5}>
                        <FormControl fullWidth size="small" variant="standard">
                            <InputLabel id="cooldown-label">Students can rejoin the queue</InputLabel>
                            <Select
                                {...register("rejoinCooldown")}
                                required
                                defaultValue={0}
                                fullWidth
                                labelId="cooldown-label"
                                id="cooldown"
                                label="Students can rejoin the queue"
                                type="number"
                            >
                                {[0, 5, 10, 15, 20, 25, 30, 45, 60, -1].map(value => <MenuItem key={value}
                                                                                               value={value}>
                                    {value === 0 && "Immediately"}
                                    {value === -1 && "Never"}
                                    {(value != -1 && value != 0) && `After ${value} minutes`}
                                </MenuItem>)}
                            </Select>
                        </FormControl>
                        <FormControl fullWidth size="small" variant="standard">
                            <InputLabel id="mask-policy-label">Face mask policy</InputLabel>
                            <Select
                                {...register("faceMaskPolicy")}
                                required
                                defaultValue={MaskPolicy.NoMaskPolicy}
                                fullWidth
                                labelId="mask-policy-label"
                                id="mask-policy"
                                label="Mask policy"
                                type="number"
                            >
                                <MenuItem value={MaskPolicy.NoMaskPolicy}>No mask policy</MenuItem>
                                <MenuItem value={MaskPolicy.MasksRecommended}>Masks Recommended</MenuItem>
                                <MenuItem value={MaskPolicy.MasksRequired}>Masks Required</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                </Stack>
                <FormGroup sx={{my: 2}}>
                    <FormControlLabel control={<Checkbox defaultChecked {...register("allowTicketEditing")}/>}
                                      label="Allow students to edit tickets once created"/>
                    <FormControlLabel control={<Checkbox {...register("showMeetingLinks")}/>}
                                      label="Provide Zoom links to students when claimed"/>
                </FormGroup>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button type="submit" variant="contained" disabled={isLoading}>Create</Button>
            </DialogActions>
        </form>
    </Dialog>;
};

export default CreateQueueDialog;


