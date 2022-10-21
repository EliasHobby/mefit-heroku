import DisplayCard from "../components/DisplayCard/DisplayCard";
import AddExerciseToWorkoutCard from "../components/DisplayCard/AddExerciseToWorkoutCard";
import '../App.css';
import { Grid, CircularProgress, Box, Button, CardActionArea } from "@mui/material";
import exerciseFuncs from "../utils/ExerciseContext";
import { NavLink } from 'react-router-dom';
import workoutFuncs from "../utils/WorkoutContext";
import { useState } from "react";

//Catalogue of all exercises in database
const ExercisesInWorkout = () => {
    //Fetch for all exercises
    const data = exerciseFuncs.FetchExercises();
    const [listOfIds, setListOfIds] = useState([])
    const workouts = workoutFuncs.FetchWorkouts();
  
  
    function handleClick(){
      //workoutFuncs.AddExerciseInWorkout(listOfIds, 2)
      alert("ExerciseId added to list")
    }
  
  


    //Check if data is received from database
    if (data === undefined) {
        return <>
        <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '80vh' }}
            >
                <CircularProgress />
            </Grid>
        </>
    }


    return (
        <>
            <h1>Exercises</h1>
            <Button  component={NavLink} to="/workouts" sx={{ alignItems: 'center', mb: '1rem', mt: '0.5rem' }}
                variant="contained"onClick={handleClick}> add exercises to workout</Button>
            <Box>

            </Box>

            <Grid container spacing={2} >

                {data.map((exercise, index) => (
                    <Grid item xs={4} mb={4} key={index}>
                        <CardActionArea onClick={setListOfIds(listOfIds => [ ...listOfIds, exercise.id])} >
                            <AddExerciseToWorkoutCard element={exercise} id={index} type="Exercise" />
                        </CardActionArea>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default ExercisesInWorkout;