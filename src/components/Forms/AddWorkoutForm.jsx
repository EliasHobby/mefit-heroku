import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';
import { useState } from 'react';
import workoutFuncs from '../../utils/WorkoutContext';
import { NavLink } from 'react-router-dom';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



// Component for adding workouts for contributors
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

    function AddWorkoutHandler(){
      workoutFuncs.CreateWorkout(workout)
      alert('Add exercise')
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


        <FormControl  fullWidth>
          <InputLabel id="Day-to-execute-dropdown">Select for executing workout</InputLabel>
          <Select
            onChange={handleChange}
            labelId="select workout execution day"
            id="select-day"
            name="day"
            value={workout.day}
            label="day for executing workout"
          >
            <MenuItem value={"Monday"}>Monday</MenuItem>
            <MenuItem value={"Tuesday"}>Tuesday</MenuItem>
            <MenuItem value={"Wednesday"}>Wednesday</MenuItem>
            <MenuItem value={"Thursday"}>Thursday</MenuItem>
            <MenuItem value={"Friday"}>Friday</MenuItem>
            <MenuItem value={"Saturday"}>Saturday</MenuItem>
            <MenuItem value={"Sunday"}>Sunday</MenuItem>
          </Select>
        </FormControl>




            <Button component={NavLink} to="/contributors/workout/addExerciseInWorkout" variant="contained"  onClick={AddWorkoutHandler}>
            Add exercises to Workout
            </Button>
          </form>
        </div>
    </Box>
  );
}

export default AddWorkoutForm;