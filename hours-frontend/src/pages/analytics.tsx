import React, {useState} from "react";
import {Box, Divider, Paper, Grid, Stack, Typography} from "@mui/material";

import {useQueues} from "@util/queue/hooks";
import AppLayout from "@components/shared/AppLayout";
import QueueCard from "@components/home/QueueCard";
import CreateQueueDialog from "@components/home/CreateQueueDialog";
import {useAuth} from "@util/auth/hooks";
import Button from "@components/shared/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function Analytics() {

    const {currentUser, isAuthenticated} = useAuth();
    const isTA = isAuthenticated && currentUser && currentUser.coursePermissions && (Object.keys(currentUser.coursePermissions).length > 0);
    
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
          </Paper>
          </Box>
        )}
      </AppLayout>
    );
}