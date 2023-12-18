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

    const {currentUser, isAuthenticated} = useAuth();
    const isTA = isAuthenticated && currentUser && currentUser.coursePermissions && (Object.keys(currentUser.coursePermissions).length > 0);
    const [analyticsData, setAnalyticsData] = useState([]);

    useEffect(() => {
      const fetchDataAndUpdate = async () => {

          const dataFromFirestore = await DataTransferAPI.fetchFirebaseData();
          await DataTransferAPI.sendJSONtoBackend("url", dataFromFirestore);
          const processedData = await DataTransferAPI.fetchJSONfromBackend("url");
          setAnalyticsData(processedData)

          
       

        // fetch data from firestore

    }; 
    fetchDataAndUpdate();
  }, []); // empty array -> updates whenever analytics page is opened

    const rows = [
      createData("Rattytoullie", 159, 24),
      createData("AndyBot", 237, 37),
      createData("Pong", 262, 24),
      createData("TicTacToe", 305, 67),
      createData("Fruit Ninja", 356, 49),
      createData("Cartoon", 159, 55),
      createData("DoodleJump", 222, 40),
      createData("Tetris", 398, 72),
      createData("Final Project", 304, 86)
    ];

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