import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

interface BasicButtonsProps {
  setTomatoes: React.Dispatch<React.SetStateAction<number>>;
  tomatoes: number;
}



export default function BasicButtons({ setTomatoes, tomatoes }: BasicButtonsProps) {
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





