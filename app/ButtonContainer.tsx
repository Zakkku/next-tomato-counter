import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import BasicButtons from './StyledComponents';

interface ButtonContainerProps {
  setTomatoes: React.Dispatch<React.SetStateAction<number>>;
  tomatoes: number;
}

export default function ButtonContainer({ setTomatoes, tomatoes }: ButtonContainerProps) {

    

    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box 
          sx={{
            
            minHeight: '50px',
            display: 'flex',
            flexDirection: 'row', 
            justifyContent: 'center', 
            alignItems: 'center', 
          }}
           >
            <BasicButtons setTomatoes={setTomatoes} tomatoes={tomatoes} />
            </Box>
          
        </Container>
      </React.Fragment>
    );
  }