import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const AddExerciseForm = () =>  {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name of exercise"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="Description of exercise"
          defaultValue=""
        />
        
        <TextField
          required
          id="outlined-required"
          label="Target muscle group"
          defaultValue=""
        />
        
        <TextField
          required
          id="outlined-required"
          label="ImageURL"
          defaultValue=""
        />
        
        </div>
    </Box>
  );
}
export default AddExerciseForm;