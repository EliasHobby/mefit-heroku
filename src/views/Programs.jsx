import DisplayCard from "../components/DisplayCard/DisplayCard";
import '../App.css';
import { Grid ,Typography, CircularProgress } from "@mui/material";
import '../App.css';
import programFuncs from "../utils/TrainingProgramContext"
import funcs from "../utils/WorkoutContext"

const Programs = () => {
  const data = programFuncs.FetchTrainingPrograms();
 
  if (data === undefined) {
    return <>Fetching traingasjginasnd programs...</>
}

  // <ul>{data.workoutId.map((x) => <li>{funcs.FetchWorkout(x).name}</li>)}</ul>

  //const listex = data.map((program, index) => <li>{funcs.FetchExercise(program.workoutId[index])}</li>)

  //const listOfEx = data.workoutId.map((x) => <li>{x}</li>)

  for (let x in data.workoutId){
    console.log(funcs.FetchWorkout(x).name)
  }

  return (
      <>
          <h1>Training Programs</h1>

          <Grid container spacing={2} >

              {data.map((program, index) => (
                  <Grid item xs={4} mb={4} key={index}>
                      <DisplayCard element={program} id={index} type="program" />
                      <Typography variant="h5">Hi {data.type} from {data.country}.</Typography>

                  </Grid>
              ))}                  
              
            </Grid>
      </>
  )
}

export default Programs;