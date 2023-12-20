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
        console.log("returned data" + data) 
        return data;
    } catch (error) {
        console.error("Error fetching data from Firestore: ", error);
    }
    }

    async function sendJSONtoBackend(backendUrl: string, data: any): Promise<any> {
        console.log("Sending data to backend");
        console.log(JSON.stringify(data));
        try {
            const response = await fetch(backendUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            console.log("this is ececuting")
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const contentType = response.headers.get('Content-Type');
            console.log("content type" + contentType)
            if (contentType && contentType.includes('application/json')) {
                const analyzedData = await response.json();
                console.log("Received data from backend:", analyzedData);
                return analyzedData;
            } else {
                throw new Error('Received non-JSON response from backend');
            }
        } catch (error) {
            console.error("Error sending data to backend:", error);
            return {}
            // Depending on your application's needs, you might want to return a default value or rethrow the error.
            // return {}; // Return a default empty object or appropriate default value.
            // or
            // throw error; // Rethrow the error to be handled by the caller.
        }
    }
    

    // convert data to json, send to java backend
// async function sendJSONtoBackend(backendUrl: string, data: any) : Promise<any> {
//     console.log("11")
//     try {
//         const response = await fetch(backendUrl, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(data),
//         });
//         console.log("10")
    
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         } 
//         const analyzedData = await response.json();
//         console.log("this function is running at least" + analyzedData)
//         return analyzedData;
//     } catch (error) {
//         console.error("Error sending data to backend:", error);
//         }
//     }

// async function fetchJSONfromBackend(backendUrl: string) : Promise<any> {
//     try {
//         const response = await fetch(backendUrl, {
//             method: 'GET', 
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         });
//         console.log(response.text())

//         if (!response.ok) {
//             throw new Error(`HTTP error - status: ${response.status}`);
//         }
//         const contentType = response.headers.get("content-type");
//         if (contentType && contentType.indexOf("application/json") !== -1) {
//             const data = await response.json(); 
//             return data; 
//         } else {
//             throw new Error("Not a JSON response");
//         }
//     } catch (error) {
//         console.error("Error fetching data from backend:", error);
//     }
    
      
    //     const data = await response.json(); 
    //     return data; 
    // } catch (error) {
    //     console.error("Error fetching data from backend:", error);
    // }

    const DataTransferAPI = {
        fetchFirebaseData,
        sendJSONtoBackend,
        // fetchJSONfromBackend
    };
    
    export default DataTransferAPI;


