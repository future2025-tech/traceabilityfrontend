// src/pages/Settings.jsx
import React from "react";
import { Typography, Paper, Box } from "@mui/material";

function Settings() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>
      <Paper sx={{ p: 2 }}>
        <Typography>
          This is the Settings page. You can add your preferences here.
        </Typography>
      </Paper>
    </Box>
  );
}

export default Settings;
