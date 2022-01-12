import React from 'react';
import { Card, CardContent } from '@mui/material';

export const CryptoCard: React.FC = ({ children }) => {
  return (
    <Card style={{ backgroundColor: '#e9ddda' }}>
      <CardContent style={{ display: 'flex', justifyContent: 'space-between', padding: 16, alignItems: 'center' }}>
        {children}
      </CardContent>
    </Card>
  );
};
