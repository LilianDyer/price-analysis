import { Box, CircularProgress } from '@mui/material';
import React from 'react';

const Spinner: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Spinner;
