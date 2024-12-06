import { Box } from '@mui/material';
import React from 'react';
interface Props {
  message: string;
}

const ErrorMessage: React.FC<Props> = ({ message }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
      }}
    >
      {message}
    </Box>
  );
};

export default ErrorMessage;
