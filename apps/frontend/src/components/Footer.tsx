import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ py: 3, textAlign: 'center', mt: 'auto' }}>
      <Typography variant="body2" color="text.secondary">
        &copy; vishnu bhagyanath 2026. all rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
