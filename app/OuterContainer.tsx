import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

interface OuterContainerProps {
    children: React.ReactNode;
  }

export default function OuterContainer( {children}: OuterContainerProps) {
    return (
        <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box  sx={{
            bgcolor: 'tomato',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column', 
            justifyContent: 'center', // Vertically center the content
            alignItems: 'center', // Horizontally center the content
          }} >
             {children}
            </Box>
        </Container>
      </React.Fragment>
    )
}