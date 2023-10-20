import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

interface OuterContainerProps {
    children: React.ReactNode;
  }

export default function ButtonContainer({ children }: OuterContainerProps) {
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box 
          sx={{
            bgcolor: 'firebrick',
            minHeight: '50px',
            display: 'flex',
            flexDirection: 'row', 
            justifyContent: 'center', 
            alignItems: 'center', 
          }}
           >
            {children}
            </Box>
          
        </Container>
      </React.Fragment>
    );
  }