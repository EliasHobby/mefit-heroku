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
import { NavLink } from "react-router-dom";
import workoutFuncs from "../utils/WorkoutContext";

//Catalogue of all Workouts that can be deleted
const DeleteWorkouts = () => {
  //Fetch for all exercises that can be added deleted
   const data = workoutFuncs.FetchWorkouts();





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
      <h1>Choose workout(s) to Delete</h1>
      <Button
        component={NavLink}
        to="/workouts"
        sx={{ alignItems: "center", mb: "1rem", mt: "0.5rem", position: "fixed", bottom: 55,  zIndex:2}}
        variant="contained"
        onClick={() =>{alert("workout(s) deleted"); }}
      >
        Finished
      </Button>

      <Grid container spacing={2}>
        {data.map((workout, index) => (
          <Grid item xs={4} mb={4} key={index}>
            <CardActionArea
              onClick={() =>
                {console.log(workout.id);
                 workoutFuncs.DeleteWorkout(workout.id); 
                 console.log("Workout with name " + workout.name + " deleted");
                }
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

export default DeleteWorkouts;
