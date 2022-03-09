import React from 'react'
import Button from '@mui/material/Button';

export const SimpleButton = ({text,addedStyleClass}) => {
  return (
    <Button className={addedStyleClass} variant="contained" size="small">{text}</Button>
  );
}
