import React from 'react';
import { Box, Typography } from '@mui/material';

const Header = ({ title }) => {
  return (
    <Box sx={{ backgroundColor: 'primary.main', color: 'white', py: 3, textAlign: 'center' }}>
      <Typography variant="h4">{title}</Typography>
    </Box>
  );
};

export default Header;
