import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const AddWorkoutForm = () =>  {
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
          label="Name of Workout"
          defaultValue=""
        />

        <TextField
          required
          id="outlined-required"
          label="type of exercise"
          defaultValue=""
        />
        
        <TextField
          required
          id="outlined-required"
          label="ImageURL"
          defaultValue=""
        />

        <TextField
          required
          id="outlined-required"
          label="Day"
          defaultValue=""
        />
        
        </div>
    </Box>
  );
}
export default AddWorkoutForm;