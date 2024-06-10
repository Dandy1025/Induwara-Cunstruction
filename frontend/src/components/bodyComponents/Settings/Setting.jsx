import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  FormControl,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
  Button,
  InputLabel,
  Paper,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
  Alert,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SecurityIcon from "@mui/icons-material/Security";
import DescriptionIcon from "@mui/icons-material/Description";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PaletteIcon from "@mui/icons-material/Palette";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import PropTypes from 'prop-types';
import '../../../styles/Setting.css';

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff3a00",
    },
    background: {
      default: "#f4f6f8",
    },
  },
});

const Setting = ({ isAdmin }) => {
  const [settings, setSettings] = useState({
    theme: "light",
    notifications: true,
    username: "",
    email: "",
    password: "",
    currentPassword: "",
    isAdmin: isAdmin,
    maxUsers: 10,
  });

  const [tabIndex, setTabIndex] = useState(0);
  const [error, setError] = useState("");
  const storedPassword = "currentPassword123"; // This should be fetched securely from your backend

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings({
      ...settings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (settings.currentPassword !== storedPassword) {
      setError("Current password is incorrect.");
      return;
    }
    setError("");
    console.log("Settings saved:", settings);
    // Here you would typically make an API call to save the settings
  };

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" className="setting-container">
        <Paper elevation={4}>
          <Box
            sx={{
              p: 4,
              bgcolor: "background.paper",
              borderRadius: 2,
              boxShadow: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 2,
              }}
            >
              <SettingsIcon color="primary" sx={{ fontSize: 40, mr: 1 }} />
              <Typography variant="h4" component="h1" align="center">
                Settings
              </Typography>
            </Box>
            <Tabs
              value={tabIndex}
              onChange={handleTabChange}
              variant="fullWidth"
              indicatorColor="primary"
              textColor="primary"
              aria-label="settings tabs"
              sx={{ marginBottom: 3 }}
            >
              <Tab label="General" icon={<AccountCircleIcon />} />
              <Tab label="Notifications" icon={<NotificationsIcon />} />
              <Tab label="Theme" icon={<PaletteIcon />} />
              <Tab label="Privacy" icon={<PrivacyTipIcon />} />
              {isAdmin && <Tab label="Admin Panel" icon={<SecurityIcon />} />}
              {isAdmin && <Tab label="Logs" icon={<DescriptionIcon />} />}
            </Tabs>
            {tabIndex === 0 && (
              <Box>
                <form onSubmit={handleSubmit}>
                  {error && <Alert severity="error">{error}</Alert>}
                  <TextField
                    label="Current Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="currentPassword"
                    value={settings.currentPassword}
                    onChange={handleInputChange}
                    className="input-field"
                    required
                  />
                  <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="username"
                    value={settings.username}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="email"
                    value={settings.email}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                  <TextField
                    label="New Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    name="password"
                    value={settings.password}
                    onChange={handleInputChange}
                    className="input-field"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className="save-button"
                    sx={{
                      mt: 2,
                    }}
                  >
                    Update Password
                  </Button>
                </form>
              </Box>
            )}
            {tabIndex === 1 && (
              <Box>
                <Typography variant="h6" gutterBottom>
                  Notification Settings
                </Typography>
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.notifications}
                      onChange={handleInputChange}
                      name="notifications"
                      color="primary"
                    />
                  }
                  label="Enable Notifications"
                  className="switch-field"
                />
                <Divider sx={{ my: 2 }} />
                <FormControl fullWidth margin="normal" variant="outlined">
                  <InputLabel>Notification Frequency</InputLabel>
                  <Select
                    label="Notification Frequency"
                    name="notificationFrequency"
                    value={settings.notificationFrequency || "daily"}
                    onChange={handleInputChange}
                    className="select-field"
                  >
                    <MenuItem value="immediately">Immediately</MenuItem>
                    <MenuItem value="daily">Daily</MenuItem>
                    <MenuItem value="weekly">Weekly</MenuItem>
                  </Select>
                </FormControl>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  className="save-button"
                  sx={{
                    mt: 2,
                  }}
                >
                  Save
                </Button>
              </Box>
            )}
            {tabIndex === 2 && (
              <Box>
                <Typography variant="h6" gutterBottom>
                  Theme Customization
                </Typography>
                <FormControl fullWidth margin="normal" variant="outlined">
                  <InputLabel>Theme</InputLabel>
                  <Select
                    label="Theme"
                    name="theme"
                    value={settings.theme}
                    onChange={handleInputChange}
                    className="select-field"
                  >
                    <MenuItem value="light">Light</MenuItem>
                    <MenuItem value="dark">Dark</MenuItem>
                    <MenuItem value="blue">Blue</MenuItem>
                    <MenuItem value="green">Green</MenuItem>
                  </Select>
                </FormControl>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  className="save-button"
                  sx={{
                    mt: 2,
                  }}
                >
                  Save Theme
                </Button>
              </Box>
            )}
            {tabIndex === 3 && (
              <Box>
                <Typography variant="h6" gutterBottom>
                  Privacy Settings
                </Typography>
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.privacyMode}
                      onChange={handleInputChange}
                      name="privacyMode"
                      color="primary"
                    />
                  }
                  label="Enable Privacy Mode"
                  className="switch-field"
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  className="save-button"
                  sx={{
                    mt: 2,
                  }}
                >
                  Save
                </Button>
              </Box>
            )}
            {tabIndex === 4 && isAdmin && (
              <Box>
                <Typography variant="h6" gutterBottom>
                  Admin Panel
                </Typography>
                <TextField
                  label="Add User by Email"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  className="input-field"
                />
                <Button
                  variant="contained"
                  color="primary"
                  sx={{ mb: 3 }}
                >
                  Add User
                </Button>
                <Typography variant="h6" gutterBottom>
                  Set Access Permissions
                </Typography>
                <FormControl fullWidth margin="normal" variant="outlined">
                  <InputLabel>User Role</InputLabel>
                  <Select
                    label="User Role"
                    name="userRole"
                    className="select-field"
                  >
                    <MenuItem value="admin">Admin</MenuItem>
                    <MenuItem value="editor">Editor</MenuItem>
                    <MenuItem value="viewer">Viewer</MenuItem>
                  </Select>
                </FormControl>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  className="save-button"
                  sx={{
                    mt: 2,
                  }}
                >
                  Save Permissions
                </Button>
              </Box>
            )}
            {tabIndex === 5 && isAdmin && (
              <Box>
                <Typography variant="h6" gutterBottom>
                  System Logs
                </Typography>
                <TableContainer component={Paper}>
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableCell>Date</TableCell>
                        <TableCell align="right">Event</TableCell>
                        <TableCell align="right">Details</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {/* Mock data for system logs */}
                      {[
                        { date: "2023-06-01", event: "Login", details: "User A logged in" },
                        { date: "2023-06-02", event: "Logout", details: "User B logged out" },
                        { date: "2023-06-03", event: "Update", details: "User C updated settings" },
                      ].map((log, index) => (
                        <TableRow key={index}>
                          <TableCell component="th" scope="row">
                            {log.date}
                          </TableCell>
                          <TableCell align="right">{log.event}</TableCell>
                          <TableCell align="right">{log.details}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            )}
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

Setting.propTypes = {
  isAdmin: PropTypes.bool.isRequired,
};

export default Setting;
