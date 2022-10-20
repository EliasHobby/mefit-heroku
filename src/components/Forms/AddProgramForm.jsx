import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material'
import TextField from '@mui/material/TextField';

const AddProgramForm = () =>  {


  
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
          value="programeName"
          label="Name of Program"
          defaultValue=""
        />

        <TextField
          required
          id="outlined-required"
          value="category"
          label="Category for program"
          defaultValue=""
        />

        <TextField
          required
          id="outlined-required"
          value="description"
          label="Description of program"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          value="imageURL"
          label="ImageURL"
          defaultValue=""
        />

      </div>
    </Box>
  );
}
export default AddProgramForm;