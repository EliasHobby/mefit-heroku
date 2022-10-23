import DisplayCard from "../components/DisplayCard/DisplayCard";
import '../App.css';
import { Grid ,Typography, CircularProgress, Button, Card } from "@mui/material";
import '../App.css';
import programFuncs from "../utils/TrainingProgramContext"
import workoutFuncs from "../utils/WorkoutContext"
import { NavLink } from "react-router-dom";
import AddProgramToGoal from "../components/AddWorkoutToGoal/AddProgramToGoal";


// Page of all programs, Catalogue of programs for user
const Programs = () => {
  const data = programFuncs.FetchTrainingPrograms();


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
          <h1>Training Programs</h1>

          <Grid container spacing={2} >

              {data.map((program, index) => (
                  <Grid item xs={4} mb={4} key={index}>
                    <Card>
                      <DisplayCard element={program} type="program"></DisplayCard>
                    </Card>
                    
                    <AddProgramToGoal name={"Add Program To Goal"} 
                    message={"You have added this Program to your Weekly Goal!"}
                    ProgramId = {index+1}
                    ></AddProgramToGoal>

                  </Grid>
              ))}                  
              
            </Grid>

      </>
  )
}

export default Programs;