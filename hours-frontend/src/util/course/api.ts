import APIClient from "@util/APIClient";
import firebaseApp from "@util/firebase/firebase_app";
import {Timestamp, doc, getDoc, updateDoc, getFirestore, collection} from "@firebase/firestore";
import { useState } from "react";

export const enum CoursePermission {
    CourseAdmin = "ADMIN",
    CourseStaff = "STAFF"
}

export interface Project {
    id: string;
    totalQueueTime: number;
}

export interface addProjectProps {
    projectName: string;
    course_id: string;
}

export interface Course {
    id: string;
    title: string;
    code: string;
    term: string;
    totalTime: number;
    numStudents: number;
    coursePermissions: { [key: string]: CoursePermission };
    projects: Project[]
}

async function updateProjects(courseID: string, projectName: string): Promise<void>{
    const db = getFirestore(firebaseApp);
    const courseCollection = collection(db, "courses");
    const courseDoc = doc(courseCollection, String(courseID));

    const fetchProjectData = async () => {
        const docSnapshot = await getDoc(courseDoc);
        if (docSnapshot.exists()) {
            const currentProjectList = docSnapshot.data().projects || [];
            const updatedProjectList = [...currentProjectList, projectName];
            updateDoc(courseDoc, {
                projects: updatedProjectList
                // currentProjectList : docSnapshot.data().projects || []
                // projects: [docSnapshot.data().projects, projectName]
            });
        }
    };
    fetchProjectData();
}

async function getCourseProjects(courseID: string) : Promise<string[]> {
    const db = getFirestore(firebaseApp);
    const courseCollection = collection(db, "courses");
    const courseDoc = doc(courseCollection, String(courseID));

    const fetchCourseProjects = async () => {
        const docSnapshot = await getDoc(courseDoc);
        if (docSnapshot.exists()) {
            const courseProjectList = docSnapshot.data().projects || [];
            return courseProjectList;
        }
    }
    const projectList = await fetchCourseProjects();
    return projectList
}

async function removeProjects(courseID: string, projectName: string): Promise<void> {
    const db = getFirestore(firebaseApp);
    const courseCollection = collection(db, "courses");
    const courseDoc = doc(courseCollection, String(courseID));

    const getProjectData = async () => {
        const docSnapshot = await getDoc(courseDoc);
        if (docSnapshot.exists()) {
            const currentProjectList = docSnapshot.data().projects || [];
            const updatedProjectList = currentProjectList.filter((proj: string) => proj !== projectName);
            updateDoc(courseDoc, {
                projects: updatedProjectList
            });
        }
    };

    getProjectData();
}
/**
 * Gets a course with the given id.
 */
 async function getCourse(courseID: string): Promise<Course> {
    try {
        return await APIClient.get(`/courses/${courseID}`, {});
    } catch (e) {
        throw e;
    }
}

/**
 * Creates a course with the given title, code, and term.
 */
async function createCourse(title: string, code: string, term: string): Promise<void> {
    try {
        await APIClient.post(`/courses/create`, {
            title, code, term
        });
        return;
    } catch (e) {
        throw e;
    }
}

/**
 * Deletes a course with the given id.
 */
 async function deleteCourse(courseID: string): Promise<Course> {
    try {
        return await APIClient.delete(`/courses/${courseID}`, {});
    } catch (e) {
        throw e;
    }
}

/**
 * Creates a course with the given title, code, and term.
 */
async function editCourse(courseID: string, title: string, code: string, term: string): Promise<void> {
    try {
        await APIClient.post(`/courses/${courseID}/edit`, {
            title, code, term
        });
        return;
    } catch (e) {
        throw e;
    }
}

/**
 * Creates a course with the given title, code, and term.
 */
async function addCoursePermission(courseID: string, email: string, permission: string): Promise<void> {
    try {
        await APIClient.post(`/courses/${courseID}/addPermission`, {
            email, permission
        });
        return;
    } catch (e) {
        throw e;
    }
}

/**
 * Creates a course with the given title, code, and term.
 */
async function removeCoursePermission(courseID: string, userID: string): Promise<void> {
    try {
        await APIClient.post(`/courses/${courseID}/removePermission`, {
            userID
        });
        return;
    } catch (e) {
        throw e;
    }
}

/**
 * 
 */
async function bulkUpload(term: string, data: string): Promise<void> {
    try {
        await APIClient.post(`/courses/bulkUpload`, {term, data});
        return;
    } catch (e) {
        throw e;
    }
}

const CourseAPI = {
    getCourse,
    createCourse,
    deleteCourse,
    editCourse,
    addCoursePermission,
    removeCoursePermission,
    bulkUpload,
    updateProjects,
    removeProjects,
    getCourseProjects
};


export default CourseAPI;