import React from 'react';
import { Box, Typography } from '@mui/material';

const AdminHeader = ({ title }) => {
  return (
    <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 3, textAlign: 'center' }}>
      <Typography variant="h4">{title}</Typography>
    </Box>
  );
};

export default AdminHeader;
