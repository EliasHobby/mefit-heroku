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
import programFuncs from "../utils/TrainingProgramContext";

//Catalogue of all Workouts that can be deleted
const DeleteTrainingProgram = () => {
  //Fetch for all exercises that can be added deleted
   const data = programFuncs.FetchTrainingPrograms();





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
      <h1>Choose program(s) to Delete</h1>
      <Button
        component={NavLink}
        to="/workouts"
        sx={{ alignItems: "center", mb: "1rem", mt: "0.5rem", position: "fixed", bottom: 55,  zIndex:2}}
        variant="contained"
        onClick={() =>{alert("trainingProgram(s) deleted"); }}
      >
        Finished
      </Button>

      <Grid container spacing={2}>
        {data.map((trainingProgram, index) => (
          <Grid item xs={4} mb={4} key={index}>
            <CardActionArea
              onClick={() =>
                {console.log(trainingProgram.id);
                 programFuncs.DeleteTrainingProgram(trainingProgram.id); 
                 console.log("Workout with name " + trainingProgram.name + " deleted");
                }
              }
            >
              <AddExerciseToWorkoutCard
                element={trainingProgram}
                id={index}
                type="trainingProgram"
              />
            </CardActionArea>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default DeleteTrainingProgram;
