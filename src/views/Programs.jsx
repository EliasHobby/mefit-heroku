import DisplayCard from "../components/DisplayCard/DisplayCard";
import '../App.css';
import { Grid ,Typography, CircularProgress } from "@mui/material";
import '../App.css';
import programFuncs from "../utils/TrainingProgramContext"
import workoutFuncs from "../utils/WorkoutContext"

// Page of all programs, Catalogue of programs for user
const Programs = () => {
  const data = programFuncs.FetchTrainingPrograms();
  localStorage.setItem("data", data)
  console.log(localStorage.getItem(data))
  if (data === undefined) {
    return <>Fetching traingasjginasnd programs...</>
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
                      <DisplayCard element={program} id={index} type="program" />
                  </Grid>
              ))}                  
              
            </Grid>

      </>
  )
}

export default Programs;