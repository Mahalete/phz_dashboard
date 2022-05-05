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
    id: 1,
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/",
  },
  {
    id: 2,
    title: "Graph",
    icon: <EqualizerIcon />,
    link: "/graph",
  },
  {
    id: 3,
    title: "Data",
    icon: <DataThresholdingIcon />,
    link: "/data",
  },
  {
    id: 4,
    title: "Comment",
    icon: <MessageIcon />,
    link: "/comment",
  },
  {
    id: 5,
    title: "Integration",
    icon: <IntegrationInstructionsIcon />,
    link: "/integration",
  },
  {
    id: 6,
    title: "Settings",
    icon: <SettingsIcon />,
    link: "/settings",
  },
  {
    id: 7,
    title: "Logout",
    icon: <LogoutIcon />,
    link: "/Logout",
  },
];
