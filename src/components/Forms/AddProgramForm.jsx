import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import {Button} from '@mui/material';
import programFuncs from '../../utils/TrainingProgramContext'

const AddProgramForm = () =>  {
  const [ trainingProgram, setTrainingProgram] = useState({
    name: "",
    category: "",
    description: "",
    image: "",

    });

               

    // Handler to update local state
    const handleChange = (event) => {
      const {name, value} = event.target;
        
        // Updating state of exercise
        setTrainingProgram({
          ...trainingProgram,
          [name]: value
      });
  }





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
        <form>
        <TextField
          required
          onChange = {handleChange}
          id="outlined-required"
          label="Name of program"
          name="name"
          value= {trainingProgram.name}
        />
        <TextField
          required
          onChange = {handleChange}
          id="outlined-required"
          label="category of program"
          name= "category"
          value= {trainingProgram.category}
        />
        
        <TextField
          required
          onChange = {handleChange}
          id="outlined-required"
          label="program description"
          name= "description"
          value= {trainingProgram.description}
        />
        
        <TextField
          required
          onChange = {handleChange}
          id="outlined-required"
          label="ImageURL"
          name= "image"
          value={trainingProgram.image}
        />


        <TextField
          id="outlined-required"
          name= "exe"
          value={trainingProgram.name + "   " + trainingProgram.description + "   "+ trainingProgram.image+ "   " + trainingProgram.category}
        />



        <Button variant="contained"  onClick={() => programFuncs.CreateTrainingProgram(trainingProgram)}>
            Create New program
            </Button>

          </form>
        </div>
    </Box>
  );
}
export default AddProgramForm;