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
import { positions } from '@mui/system';

//Catalogue of all exercises in database
const DeleteExercise = () => {
  //Fetch for all exercises that can be added deleted
   let data = exerciseFuncs.FetchExercises();



  function handleClick(exercise) {
    //amount of workouts in database
    console.log(exercise.id)
    // exerciseFuncs.DeleteExercise(exercise.id);
    console.log("Exercise with name" + exercise.name + "deleted")
    alert("exerciseDeleted ");
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
      <h1>Choose exercise(s) to Delete</h1>
      <Button
        component={NavLink}
        to="/exercises"
        sx={{ alignItems: "center", mb: "1rem", mt: "0.5rem", position: "fixed", bottom: 55,  zIndex:2}}
        variant="contained"
      >
        Finished
      </Button>

      <Grid container spacing={2}>
        {data.map((exercise, index) => (
          <Grid item xs={4} mb={4} key={index}>
            <CardActionArea
              onClick={() =>
                {console.log(exercise.id);
                 exerciseFuncs.DeleteExercise(exercise.id);
                 console.log("Exercise with name" + exercise.name + "deleted");
                 alert("exerciseDeleted");
                }
              }
            >
              <AddExerciseToWorkoutCard
                element={exercise}
                id={index}
                type="exercise"
              />
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default DeleteExercise;
