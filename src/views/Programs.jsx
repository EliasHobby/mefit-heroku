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
  localStorage.setItem("data", data)
  console.log(localStorage.getItem(data))

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

  // <ul>{data.workoutId.map((x) => <li>{funcs.FetchWorkout(x).name}</li>)}</ul>

  //const listex = data.map((program, index) => <li>{funcs.FetchExercise(program.workoutId[index])}</li>)

  // const listOfEx = data.workoutId.map((x) => <li>{x}</li>)

  // for (let x in data.workoutId){
  //   console.log(funcs.FetchWorkout(x).name)
  // }

  return (
      <>
          <h1>Training Programs</h1>

          <Grid container spacing={2} >

              {data.map((program, index) => (
                  <Grid item xs={4} mb={4} key={index}>
                    <Card>
                      <DisplayCard element={program} id={index} type="program"></DisplayCard>
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