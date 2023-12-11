import React, {FC} from "react";
import {Queue} from "@util/queue/api";
import {Chip} from "@mui/material";
import CourseAPI, {Course} from "@util/course/api";

export interface ClassIDChipProps {
    queue: Queue;
    course: Course;
    size?: "small" | "medium";
}


const ClassIDChip: FC<ClassIDChipProps> = ({ queue, course, size }) => {
    // Return Chip component if course.id exists, else return null
    return course.id 
        ? <Chip label={course.id} size={size} color="error" sx={{ fontWeight: 600 }} />
        : null;
}
// const ClassIDChip: FC<ClassIDChipProps> = ({queue, course, size}) => {
//     if (course.id) {
//         return <Chip label={course.id} size={size} color="error" sx={{fontWeight: 600}}/>;
//     }
// }

export default ClassIDChip;
