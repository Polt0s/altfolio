import React from 'react';
import { Box, CircularProgress } from '@mui/material';

interface ILoader {
  size?: number | string;
}

export const Loader: React.FC<ILoader> = ({ size }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress size={size} />
    </Box>
  );
};
