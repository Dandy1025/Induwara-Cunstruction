import React from 'react';
import { Box, Typography } from '@mui/material';

const AdminFooter = () => {
  return (
    <Box sx={{ p: 3, textAlign: 'center', backgroundColor: '#f1f1f1', mt: 4 }}>
      <Typography variant="body2" color="textSecondary">
        Admin Panel &copy; 2024
      </Typography>
    </Box>
  );
};

export default AdminFooter;
