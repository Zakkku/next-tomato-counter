import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

interface TomatoContainer{
    tomatoes: number;
}

export default function TomatoContainer({tomatoes}: TomatoContainer) {
    
    const tomatoImages = [];
  
    for (let i = 0; i < tomatoes; i++) {
      tomatoImages.push('🍅');
    };
  
    const tomatoString = tomatoImages.join('');
  
    let displayText;
  if (tomatoes === 0) {
    displayText = 'No tomatoes yet';
  } else if (tomatoes === -1) {
    displayText = `${tomatoes} tomato!!`;
  } else if (tomatoes < -1) {
    displayText =`${tomatoes} tomatoes!!`;
  }
    else if (tomatoes % 4 === 0) {
      displayText = (
        <h4>
          <span>{tomatoString}</span>
          <br />
          <span>Time to take a long break! You earned it!</span>
        </h4>
      );
  } else {
    displayText = tomatoString;
  }
  
    
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box 
          sx={{
            bgcolor: 'firebrick',
            minHeight: '200px',
            display: 'flex',
            flexDirection: 'row', 
            justifyContent: 'center', 
            alignItems: 'center', 
            marginTop: '20px',
            boxSizing: 'border-box',
          }}
           >
            <h2>
          {displayText}
          </h2>
            </Box>
          
        </Container>
      </React.Fragment>
    );
  }