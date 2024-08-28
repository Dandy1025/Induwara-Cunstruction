import React from "react";
import NavBarComponent from "./NavBarComponent";
import { Box, Grid } from "@mui/material";
import SideBarComponent from "./SideBarComponent";
import { Outlet } from "react-router-dom";

export default function RootComponent() {
  return (
    <>
      {/* Navigation Bar */}
      <NavBarComponent />

      {/* Main Content */}
      <Box>
        <Grid container spacing={0}>
          {/* Sidebar */}
          <Grid item md={2} sm={0}>
            <SideBarComponent />
          </Grid>

          {/* Main Content Area */}
          <Grid item md={10}>
            <Outlet />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
