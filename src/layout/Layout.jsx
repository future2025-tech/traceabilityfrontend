// src/layout/Layout.jsx
import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
} from "@mui/material";
import {
  Mail,
  AccountCircle,
  Dashboard as DashboardIcon,
  Settings as SettingsIcon,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

export default function Layout({ children }) {
  const navigate = useNavigate();

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
    { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      {/* Navbar */}
      <AppBar
        position="fixed"
            sx={{
                width: `calc(100% - ${drawerWidth}px)`,
                ml: `${drawerWidth}px`,
                backgroundColor: "#fff",   // make navbar white
                color: "black",            // change text/icon color to black
                boxShadow: "0 1px 4px rgba(0,0,0,0.1)", // light shadow for separation
            }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" noWrap>
            My Dashboard
          </Typography>
          <Box>
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        {/* Logo area */}
        <Box
            sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 64,
            bgcolor: "#fff",        // white background
            color: "black",         // text/icon color
            borderBottom: "1px solid #e0e0e0", // subtle separator line
        }}
        >
          <Typography variant="h6">MyLogo</Typography>
        </Box>

        {/* Nav items */}
        <List>
          {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={() => navigate(item.path)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: "background.default",
          p: 3,
          mt: 8, // push content below navbar
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
