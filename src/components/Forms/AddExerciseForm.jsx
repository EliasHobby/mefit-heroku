import * as React from 'react';
import Box from '@mui/material/Box';
import {Button} from '@mui/material';
import exerciseFuncs from '../../utils/ExerciseContext'
import TextField from '@mui/material/TextField';
import { useState } from 'react';

export function AddExerciseForm () {
  const [ exercise, setExercise] = useState({
    name: "",
    description: "",
    target_Muscle_Group: "",
    image: "",

    });

    // Handler to update local state
    const handleChange = (event) => {
      const {name, value} = event.target;
        
        // Updating state of exercise
        setExercise({
          ...exercise,
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
          label="Name of exercise"
          name="name"
          value= {exercise.name}
        />
        <TextField
          required
          onChange = {handleChange}
          id="outlined-required"
          label="Description of exercise"
          name= "description"
          value= {exercise.description}
        />
        
        <TextField
          required
          onChange = {handleChange}
          id="outlined-required"
          label="Target muscle group"
          name= "target_Muscle_Group"
          value= {exercise.target_Muscle_Group}

        />
        
        <TextField
          required
          onChange = {handleChange}
          id="outlined-required"
          label="ImageURL"
          name= "image"
          value={exercise.image}
        />

        <TextField
          id="outlined-required"
          label = "mylabel"
          name= "exe"
          value={exercise.name + "   " + exercise.description + "   "+ exercise.image+ "   " + exercise.target_Muscle_Group}
        />



        <Button variant="contained"  onClick={() => exerciseFuncs.CreateExercise(exercise)}>
            Create Exercise
            </Button>

          </form>
        </div>
    </Box>
  );
}
export default AddExerciseForm;