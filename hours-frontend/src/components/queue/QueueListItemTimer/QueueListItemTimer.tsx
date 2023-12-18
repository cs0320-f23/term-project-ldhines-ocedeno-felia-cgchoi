import React, {FC, useEffect, useState} from "react";
import {Timestamp, doc, getDoc, updateDoc, getFirestore, collection} from "@firebase/firestore";
import firebaseApp from "@util/firebase/firebase_app";
import {intervalToDuration} from "date-fns";
import {Chip} from "@mui/material";
import CourseAPI, { Project } from "@util/course/api";

export interface QueueListItemTimerProps {
    claimedAt: Timestamp;
}

export interface QueueListWaitTimerProps {
    claimedAt: Timestamp;
    createdAt: Timestamp;
    courseID: string;
    projectName: string;
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

export const calculateTimeInQueue = (joinedAtSeconds?: number, claimedAtSeconds?: number): string => {
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


export const QueueListWaitTimer = async (createdAt : Timestamp, claimedAt :Timestamp, courseID : string, projectName: string) => {
    const [waitTime, setWaitTime] = useState(calculateTimeInQueue(createdAt.seconds, claimedAt.seconds))

    useEffect(() => {
        const intervalID = setInterval(() => {
            const newWaitTime = calculateTimeInQueue(createdAt.seconds, claimedAt.seconds);
            setWaitTime(newWaitTime);
        }, 1000);

        return () => clearInterval(intervalID);
    }, [createdAt, claimedAt]);

    await CourseAPI.updateProjectFeatures(courseID, projectName, waitTime);
};

