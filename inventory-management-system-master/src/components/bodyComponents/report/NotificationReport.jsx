import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";
import PropTypes from 'prop-types';

const NotificationReport = ({ notifications }) => {
  return (
    <TableContainer component={Paper}>
      <Typography variant="h6" gutterBottom>
        Notifications
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Message</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {notifications.map((notification, index) => (
            <TableRow key={index}>
              <TableCell>{notification.date}</TableCell>
              <TableCell>{notification.type}</TableCell>
              <TableCell>{notification.message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

NotificationReport.propTypes = {
  notifications: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
  })).isRequired,
};

export default NotificationReport;
