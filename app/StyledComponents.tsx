import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function BasicButtons() {

    const [tomatoes, setTomatoes] = useState(0);

  return (
    <Stack spacing={2} direction="row">
    <Button onClick={() => setTomatoes(tomatoes - 1)}  
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
      <Button onClick={() => setTomatoes(tomatoes + 1)}  
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





