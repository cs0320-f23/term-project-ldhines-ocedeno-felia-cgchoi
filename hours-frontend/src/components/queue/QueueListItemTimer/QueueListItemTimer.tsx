import React, {FC, useEffect, useState} from "react";
import {Timestamp, doc, getDoc, updateDoc, getFirestore, collection} from "@firebase/firestore";
import firebaseApp from "@util/firebase/firebase_app.js";
import {intervalToDuration} from "date-fns";
import {Chip} from "@mui/material";

export interface QueueListItemTimerProps {
    claimedAt: Timestamp;
}

export interface QueueListWaitTimerProps {
    claimedAt: Timestamp;
    createdAt: Timestamp;
    course_id: String;
}

const calculateClaimDuration = (claimedAtSeconds?: number): string => {
    if (!claimedAtSeconds) {
        return '';
    }
    const timer = Timestamp.now().seconds - claimedAtSeconds;
    const duration = intervalToDuration({start: 0, end: timer * 1000});
    return `${duration.minutes! < 10 ? '0' + duration.minutes : duration.minutes}:${
        duration.seconds! < 10 ? '0' + duration.seconds : duration.seconds
    }`;
};

const calculateTimeInQueue = (joinedAtSeconds?: number, claimedAtSeconds?: number): string => {
    if (!claimedAtSeconds || !joinedAtSeconds) {
        return '';
    }
    const waitTimer = claimedAtSeconds - joinedAtSeconds;
    const timeInQueue = intervalToDuration({start: 0, end: waitTimer * 1000})
    return `${timeInQueue.minutes! < 10 ? '0' + timeInQueue.minutes : timeInQueue.minutes}:${
        timeInQueue.seconds! < 10 ? '0' + timeInQueue.seconds : timeInQueue.seconds
    }`;
};

export const QueueListItemTimer: FC<QueueListItemTimerProps> = ({claimedAt}) => {
    const [time, setTime] = useState(calculateClaimDuration(claimedAt.seconds));

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(calculateClaimDuration(claimedAt.seconds));
        }, 1000);

        return () => clearInterval(intervalID);
    }, [claimedAt]);

    return <Chip label={time} size="small" variant="outlined"
                 style={{width: "9ch", overflow: "hidden", fontWeight: 500}}/>;
};

export const QueueListWaitTimer:  FC<QueueListWaitTimerProps> = ({createdAt, claimedAt, course_id}) => {
    const [waitTime, setWaitTime] = useState(calculateTimeInQueue(createdAt.seconds, claimedAt.seconds))

    useEffect(() => {
        const waitIntervalID = setInterval(() => {
            setWaitTime(calculateTimeInQueue(createdAt.seconds, claimedAt.seconds));
        }, 1000);

        const db = getFirestore(firebaseApp);
        const courseCollection = collection(db, "courses");
        const courseDoc = doc(courseCollection, String(course_id));

        const fetchCourseData = async () => {
            const docSnapshot = await getDoc(courseDoc);
            if (docSnapshot.exists()) {
                updateDoc(courseDoc, {
                    totalTime: docSnapshot.data().totalTime + waitTime,
                    numStudents : docSnapshot.data().numStudents + 1
                });
            }
        };

        fetchCourseData();

        return () => clearInterval(waitIntervalID);
    }, [claimedAt]);

    return <Chip label={waitTime} size="small" variant="outlined"
                 style={{width: "9ch", overflow: "hidden", fontWeight: 500}}/>;
};

