import React, {useState} from "react";
import {Box, Divider, Grid, Stack, Typography} from "@mui/material";
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
    
    return <AppLayout maxWidth={false}>
        {!isTA && <Box mb={2}>
        <Stack mt={18} spacing={2} justifyContent="center" alignItems="center">
            <Typography variant="h6" mb={2}>
                You do not currently have access to any course analytics.
            </Typography>
            </Stack>
        </Box>}
    </AppLayout>
}