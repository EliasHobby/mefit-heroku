import DisplayCard from "../components/DisplayCard/DisplayCard";
import AddExerciseToWorkoutCard from "../components/DisplayCard/AddExerciseToWorkoutCard";
import "../App.css";
import {
  Grid,
  CircularProgress,
  Box,
  Button,
  CardActionArea
} from "@mui/material";
import exerciseFuncs from "../utils/ExerciseContext";
import { NavLink } from "react-router-dom";
import workoutFuncs from "../utils/WorkoutContext";
import { useState } from "react";

//Catalogue of all exercises in database
const ExercisesInWorkout = () => {
  //Fetch for all exercises
  const data = exerciseFuncs.FetchExercises();
  const workoutsData = workoutFuncs.FetchWorkouts();
  const listOfIds = []

  function handleClick() {
    //amount of workouts in database
    console.log(listOfIds)
    console.log(data[data.length-1].id)
    // workoutFuncs.AddExerciseInWorkout(Object.keys(workoutsData).length, listOfIds);
    alert("Exercises added to list");
  }

  //Check if data is received from database
  if (data === undefined) {
    return (
      <>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "80vh" }}
        >
          <CircularProgress />
        </Grid>
      </>
    );
  }

  return (
    <>
      <h1>Add exercises to workout</h1>
      <Button
        component={NavLink}
        to="/workouts"
        sx={{ alignItems: "center", mb: "1rem", mt: "0.5rem", position: "fixed", bottom: 55,  zIndex:2}}
        variant="contained"
        onClick={handleClick}
      >
        Add exercises to workout
      </Button>

      <Grid container spacing={2}>
        {data.map((exercise, index) => (
          <Grid item xs={4} mb={4} key={index}>
            <CardActionArea
              onClick={() =>{
                listOfIds.push(exercise.id);
                console.log(listOfIds);
                console.log(Object.keys(workoutsData)[-1]);
              }

              }
            >
              <AddExerciseToWorkoutCard
                element={exercise}
                id={exercise.id}
                type="exercise"
              />
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default ExercisesInWorkout;
