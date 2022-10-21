import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';
import { useState } from 'react';
import workoutFuncs from '../../utils/WorkoutContext';

export function AddWorkoutForm () {
    const [ workout, setWorkout] = useState({
    name: "",
    type: "",
    image: "",
    day: "",


    });

    // Handler to update local state
    const handleChange = (event) => {
      const {name, value} = event.target;
        
        // Updating state of exercise
        setWorkout({
          ...workout,
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
          label="Name of workout"
          name="name"
          value= {workout.name}
        />
        <TextField
          required
          onChange = {handleChange}
          id="outlined-required"
          label="type of workout"
          name= "type"
          value= {workout.type}
        />
        

        
        <TextField
          required
          onChange = {handleChange}
          id="outlined-required"
          label="ImageURL"
          name= "image"
          value={workout.image}
        />

        <TextField
          required
          onChange = {handleChange}
          id="outlined-required"
          label="day for executing workout"
          name= "day"
          value= {workout.day}

        />
        <TextField
          id="outlined-required"
          name= "exe"
          value={workout.name + "   " + workout.type + "   "+ workout.image+ "   " + workout.day}
        />


        <Box>
            <NavLink to="/Contibutors/Workout">
            <Button sx={{ alignItems: 'center', mb: '1rem', mt: '0.5rem' }}
             variant="contained" >Back to create workout</Button>
            </NavLink>
        </Box>



            <Button variant="contained"  onClick={() => workoutFuncs.CreateWorkout(workout)}>
            Create workout
            </Button>
          </form>
        </div>
    </Box>
  );
}

export default AddWorkoutForm;