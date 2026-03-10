import React from 'react';
import { Box, Typography } from '@mui/material';

const Hero: React.FC = () => {
  return (
    <Box component="section" sx={{ textAlign: 'center', py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        steamflex
      </Typography>
      <Typography variant="h5" color="text.secondary">
        flex your steam stats with an embeddable banner.
      </Typography>
    </Box>
  );
};

export default Hero;
