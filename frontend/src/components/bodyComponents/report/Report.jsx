import React, { useState, useEffect } from "react";
import { Container, Paper, Tabs, Tab, Box, Typography } from "@mui/material";
import NotificationReport from "./NotificationReport";
import FeedbackReport from "./FeedbackReport";
import NotificationsIcon from "@mui/icons-material/Notifications";
import FeedbackIcon from "@mui/icons-material/Feedback";
import PropTypes from 'prop-types';
import '../../../styles/Setting.css';




const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const Report = () => {
  const [value, setValue] = useState(0);
  const [notifications, setNotifications] = useState([]);
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    // Mock data for notifications
    const mockNotifications = [
      { date: "2024-06-01", type: "Info", message: "Server maintenance scheduled." },
      { date: "2024-06-02", type: "Warning", message: "High memory usage detected." },
      { date: "2024-06-03", type: "Error", message: "Database connection failed." },
    ];
    setNotifications(mockNotifications);

    // Mock data for feedback
    const mockFeedback = [
      { username: "JohnDoe", date: "2024-06-01", rating: 5, comments: "Great service!" },
      { username: "JaneSmith", date: "2024-06-02", rating: 4, comments: "Very helpful support." },
      { username: "BobJohnson", date: "2024-06-03", rating: 3, comments: "Average experience." },
    ];
    setFeedback(mockFeedback);
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="md" className="report-container">
      <Paper elevation={4}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="report tabs"
            variant="fullWidth"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="Notifications" icon={<NotificationsIcon />} />
            <Tab label="Feedback" icon={<FeedbackIcon />} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <NotificationReport notifications={notifications} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <FeedbackReport feedback={feedback} />
        </TabPanel>
      </Paper>
    </Container>
  );
};

export default Report;
