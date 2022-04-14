import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import DataThresholdingIcon from '@mui/icons-material/DataThresholding';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

 export const SideMenuData = [
     {
         title: "Dashboard",
         icon: <DashboardIcon />,
         link: "/dashboard"
     },
     {
        title: "Graph",
        icon: <EqualizerIcon />,
        link: "/graph"
    },
    {
        title: "Data",
        icon: <DataThresholdingIcon />,
        link: "/data"
    },
    {
        title: "Comment",
        icon: <MessageIcon />,
        link: "/comment"
    },
    {
        title: "Setting",
        icon: <SettingsIcon />,
        link: "/setting"
    },
    {
        title: "Logout",
        icon: <LogoutIcon />,
        link: "/Logout"
    }
 ]

