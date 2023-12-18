import firebaseApp from "@util/firebase/firebase_app";
import {Timestamp, doc, getDoc, getDocs, updateDoc, getFirestore, collection} from "@firebase/firestore";

// fetch data from firestore

async function fetchFirebaseData() : Promise<any> {
    try {
        const db = getFirestore(firebaseApp);
        const courseCollection = collection(db, "courses");
        const docSnapshot = await getDocs(courseCollection);

        const data = docSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        }));

        return data;
    } catch (error) {
        console.error("Error fetching data from Firestore: ", error);
    }
    }

    // convert data to json, send to java backend
async function sendJSONtoBackend(backendUrl: string, data: any) : Promise<void> {
    try {
        const response = await fetch(backendUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
    
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        } 
    } catch (error) {
        console.error("Error sending data to backend:", error);
        }
    }

async function fetchJSONfromBackend(backendUrl: string) : Promise<any> {
    try {
        const response = await fetch(backendUrl, {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error - status: ${response.status}`);
        }

        const data = await response.json(); 
        return data; 
    } catch (error) {
        console.error("Error fetching data from backend:", error);
    }
}

    const DataTransferAPI = {
        fetchFirebaseData,
        sendJSONtoBackend,
        fetchJSONfromBackend
    };
    
    export default DataTransferAPI;


