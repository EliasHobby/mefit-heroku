import * as React from 'react';
import Box from '@mui/material/Box';
import {Button} from '@mui/material';
import exerciseFuncs from '../../utils/ExerciseContext'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';


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

  // handleClickChange () {
  //     alert("exercise added")      
  //     // Updating state of exercise
  //     exerciseFuncs.CreateExercise(exercise)
  // }

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



        <Button variant="contained" component={NavLink} to="/exercises"  onClick={() => {exerciseFuncs.CreateExercise(exercise); alert("Exercise " + exercise.name + "added")}}>
            Create Exercise
            </Button>

          </form>
        </div>
    </Box>
  );
}
export default AddExerciseForm;