import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
    <Button 
    sx={{
        background: '#edd9bb',
    color: 'tomato',
    marginRight: '10px',
    fontSize: '30px',
    border: '2px solid firebrick',
    '&:hover': {
        border: '2px solid white',
        background: 'firebrick',
        color: 'white',
        
      },
      }}
    variant="outlined">-</Button>
      <Button 
    sx={{
        background: '#edd9bb',
    color: 'tomato',
    marginRight: '10px',
    fontSize: '30px',
    border: '2px solid firebrick',
    '&:hover': {
        border: '2px solid white',
        background: 'firebrick',
        color: 'white',
        
      },
      }}
    variant="outlined">+</Button>
    </Stack>
  );
}





