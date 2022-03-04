import React from 'react'
import TextField from '@mui/material/TextField';

export const Input = ({inputText}) => {
  return (
    <TextField id="outlined-basic" label={inputText} variant="outlined" />
  );
}

