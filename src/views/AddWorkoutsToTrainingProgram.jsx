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
import programFuncs from "../utils/TrainingProgramContext";

//Catalogue of all exercises in database
const AddWorkoutsInTrainingProgram = () => {
  //Fetch for all workouts that can be added to program
   const data = workoutFuncs.FetchWorkouts();
   const programData = programFuncs.FetchTrainingPrograms();    


  const [listOfIds, setListOfIds] = useState([]);

  function handleClick() {
    //amount of workouts in database
    console.log(listOfIds)
    console.log(Object.keys(programData).length)
    programFuncs.AddWorkoutsToProgram(Object.keys(programData).length, listOfIds);
    alert("Workouts added to Program");
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
      <h1>Choose exercises to add</h1>
      <Button
        component={NavLink}
        to="/programs"
        sx={{ alignItems: "center", mb: "1rem", mt: "0.5rem", position: "fixed", bottom: 55,  zIndex:2}}
        variant="contained"
        onClick={handleClick}
      >
        Add exercises to workout
      </Button>

      <Grid container spacing={2}>
        {data.map((workout, index) => (
          <Grid item xs={4} mb={4} key={index}>
            <CardActionArea
              onClick={() =>
                listOfIds.push(workout.id)
              }
            >
              <AddExerciseToWorkoutCard
                element={workout}
                id={index}
                type="workout"
              />
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default AddWorkoutsInTrainingProgram;
