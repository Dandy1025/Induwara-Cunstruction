import React, { useState } from "react";
import "../styles/links.css";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  IconButton,
  Box,
} from "@mui/material";
import {
  HomeOutlined,
  Inventory2Outlined,
  SettingsOutlined,
  DescriptionOutlined,
  MonetizationOnOutlined,
  CardTravelOutlined,
  TrendingUpOutlined,
  PeopleAltOutlined,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

export default function SideBarComponent() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPage = location.pathname;

  const sideBarComponent = [
    {
      title: "Home",
      icon: <HomeOutlined fontSize="medium" color="primary" />,
      path: "/Admin/home",
    },
    {
      title: "Inventory",
      icon: <Inventory2Outlined fontSize="medium" color="primary" />,
      path: "/Admin/inventory",
    },
    {
      title: "Orders",
      icon: <CardTravelOutlined fontSize="medium" color="primary" />,
      path: "/Admin/orders",
    },
    {
      title: "Customers",
      icon: <PeopleAltOutlined fontSize="medium" color="primary" />,
      path: "/Admin/customers",
    },
    {
      title: "Revenue",
      icon: <MonetizationOnOutlined fontSize="medium" color="primary" />,
      path: "/Admin/revenue",
    },
    {
      title: "Growth",
      icon: <TrendingUpOutlined fontSize="medium" color="primary" />,
      path: "/Admin/growth",
    },
    {
      title: "Reports",
      icon: <DescriptionOutlined fontSize="medium" color="primary" />,
      path: "/Admin/reports",
    },
    {
      title: "Settings",
      icon: <SettingsOutlined fontSize="medium" color="primary" />,
      path: "/Admin/settings",
    },
  ];

  const [selected, setSelected] = useState(currentPage);

  const handleSelectedComponent = (path) => {
    setSelected(path);
    navigate(path);
  };

  return (
    <List>
      {sideBarComponent.map((comp, index) => (
        <ListItem disablePadding dense key={index}>
          <Box width="100%">
            <ListItemButton
              onClick={() => handleSelectedComponent(comp.path)}
              selected={currentPage === comp.path}
              sx={{
                mb: 3,
                borderLeft: currentPage === comp.path ? 4 : 0,
                borderColor: "primary.main",
                ml: 1,
              }}
            >
              <ListItemIcon>
                <IconButton>{comp.icon}</IconButton>
              </ListItemIcon>
              <ListItemText
                primary={comp.title}
                primaryTypographyProps={{
                  fontSize: "medium",
                  fontWeight: currentPage === comp.path ? "bold" : "normal",
                  color: currentPage === comp.path ? "primary.main" : "inherit",
                }}
              />
            </ListItemButton>
          </Box>
        </ListItem>
      ))}
    </List>
  );
}
