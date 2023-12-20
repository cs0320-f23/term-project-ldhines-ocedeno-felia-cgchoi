import React, {useEffect, useState} from "react";
import {Box, Divider, Paper, Grid, Stack, Typography, TableBody, TableCell, Table, TableRow, TableContainer, TableHead} from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";
import {useQueues} from "@util/queue/hooks";
import AppLayout from "@components/shared/AppLayout";
import QueueCard from "@components/home/QueueCard";
import CreateQueueDialog from "@components/home/CreateQueueDialog";
import {useAuth} from "@util/auth/hooks";
import Button from "@components/shared/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DataTransferAPI from "@util/data/dataTransfer";

export default function Analytics() {

  type Row = {
  name: string;
  visits: number;
  waittime: number;
};

    const {currentUser, isAuthenticated} = useAuth();
    const isTA = isAuthenticated && currentUser && currentUser.coursePermissions && (Object.keys(currentUser.coursePermissions).length > 0);
    const [analyticsData, setAnalyticsData] = useState({ type: "", data: [] });

    useEffect(() => {
      let isMounted = true;
      console.log("useEffect started"); // Initial entry into useEffect
  
      const fetchDataAndUpdate = async () => {
          console.log("fetchDataAndUpdate started"); // Entry into fetchDataAndUpdate function
  
          try {
              console.log("Attempting to fetch data from Firestore");
              const dataFromFirestore = await DataTransferAPI.fetchFirebaseData();
              console.log("Data from Firestore:", dataFromFirestore); // Check what data is returned

              
              let projects: any = [];
              for (const courses of dataFromFirestore) {
                let projMap;
                console.log(courses.projects);
                console.log(typeof courses.projects);
                for (const [key, value] of Object.entries(courses.projects)) {
                  projMap = value;
                }
                projects.push(projMap);
                break;
              }
              
  
              if (isMounted && dataFromFirestore) {
                  console.log("Sending data to backend: ", projects);
                  const processedData = await DataTransferAPI.sendJSONtoBackend("http://localhost:8485/analytics?sorted=true", projects);
                  console.log("Processed data received from backend:", processedData); // Check what data is received after processing
  
                  if (processedData) {
                      console.log("Setting state with processed data");
                      setAnalyticsData(processedData);
                  }
              }
          } catch (error) {
              if (isMounted) {
                  console.error("Error during data fetch and update: ", error);
              }
          }
      };
  
      fetchDataAndUpdate().then(() => {
          console.log("fetchDataAndUpdate function completed"); // After function execution
      });
  
      return () => {
          isMounted = false; // Set the flag to false when the component unmounts
          console.log("Component unmounted"); // Log when component is unmounting
      };
  }, []); // Dependency array // empty array -> updates whenever analytics page is opened

    const [rows, setRows] = useState<Row[]>([]);

    const useUpdateRows = (analyticsData: { type: string, data: any[] } , rows: any[]) => {
      
      useEffect(() => {
        console.log("Analytics Data",analyticsData.data);
        const newRows: Row[] = [];
        for (const p in analyticsData.data){
          let projectName = analyticsData.data[p].project.projectName
          let numStudents = analyticsData.data[p].project.features.numOfStudents
          let averageWaitTime = analyticsData.data[p].averageWaitTime
          
          console.log(projectName,numStudents,averageWaitTime)
          newRows.push(createData(projectName,numStudents,averageWaitTime)) 
        }
        setRows(newRows);
      }, [analyticsData]);
    };

    // Usage:
    useUpdateRows(analyticsData, rows);
    console.log(rows,"here")
    return (
      <AppLayout maxWidth={false}>
        {!isTA && (
          <Box mb={2}>
            <Stack
              mt={18}
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Typography variant="h6" mb={2}>
                You do not currently have access to any course analytics.
              </Typography>
            </Stack>
          </Box>
        )}
        {isTA && (
          <Box mb={2}>
            <Paper sx={{ overflow: "hidden" }}>
              <Box
                width="100%"
                p={[2, null, 3]}
                color="#fff"
                position="relative"
                sx={{ bgcolor: "#2196f3" }} //light blue
              >
                <Box height={120}></Box>
                <Box>
                  <Stack direction="row" spacing={0.5} alignItems="center">
                    <Typography variant="body1" noWrap>
                      {
                        "cs0150: Introduction to Object-Oriented Programming and Computer Science"
                      }
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography variant="h4" fontWeight={600}>
                      Analytics
                    </Typography>
                  </Stack>
                </Box>
              </Box>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Project Name</TableCell>
                      <TableCell align="right">Number of Visits</TableCell>
                      <TableCell align="right">Average Wait Time&nbsp;(min)</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.visits}</TableCell>
                        <TableCell align="right">{row.waittime}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <BarChart
                xAxis={[
                  {
                    scaleType: "band",
                    data: [
                      "Rattytoullie",
                      "AndyBot",
                      "Pong",
                      "TicTacToe",
                      "Fruit Ninja",
                      "Cartoon",
                      "DoodleJump",
                      "Tetris",
                      "Final Project",
                    ],
                  },
                ]}
                series={[
                  { data: [4, 3, 5, 6, 4, 6, 7, 9, 10], color: "#673ab7" },
                ]}
                width={1000}
                height={300}
              />
            </Paper>
          </Box>
        )}
      </AppLayout>
    );

    function createData(
      name: string,
      visits: number,
      waittime: number,
    ) {
      return { name, visits, waittime };
    }
}