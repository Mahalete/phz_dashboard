import React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import DataThresholdingIcon from "@mui/icons-material/DataThresholding";
import MessageIcon from "@mui/icons-material/Message";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

export const SideMenuData = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/",
  },
  {
    title: "Graph",
    icon: <EqualizerIcon />,
    link: "/graph",
  },
  {
    title: "Data",
    icon: <DataThresholdingIcon />,
    link: "/data",
  },
  {
    title: "Comment",
    icon: <MessageIcon />,
    link: "/comment",
  },
  {
    title: "Integration",
    icon: <IntegrationInstructionsIcon />,
    link: "/integration",
  }
];

export const SideMenuData2 = [
  
  {
    title: "Settings",
    icon: <SettingsIcon />,
    link: "/settings",
  },
  {
    title: "Logout",
    icon: <LogoutIcon />,
    link: "/Logout",
  },
];
