// src/pages/Dashboard.jsx
import React from "react";
import { Typography, Paper, Box } from "@mui/material";

function Dashboard() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Paper sx={{ p: 2 }}>
        <Typography>
          Welcome! This is the Dashboard page.
        </Typography>
      </Paper>
    </Box>
  );
}

export default Dashboard;
