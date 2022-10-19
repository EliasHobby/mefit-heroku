import '../App.css';
import { Grid, Typography, CircularProgress } from "@mui/material";
import programFuncs from "../utils/TrainingProgramContext"
import workoutFuncs from "../utils/WorkoutContext"
import DisplayCard from "../components/DisplayCard/DisplayCard";


const Programpage = () => {

    //Workout id of the selected program
    const programId = window.location.pathname.match(/\d+/)[0];
    console.log(programId)
    //Data for the selected program 
    const data = programFuncs.FetchTrainingProgram(programId);
    console.log(data)

    //Data for the exercises in the selected workout
    const workoutsData = programFuncs.FetchWorkoutsInProgram(1);
    console.log("abc:" + workoutsData)
    //List to hold specific data for the workout
    const list = []

    // for (const x of dato){
    //     list.push(x.name)
    // }            Lista all id's  <Typography><ul>Workouts:  {data.workoutId.map((x) => <li>{x}</li>)} </ul> </Typography>


    // console.log(list)


    if (workoutsData === undefined) {
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
            <>Fetching training programs...</>
        </>
    }

    return (
        <>
            <h1>Program  {data.id } :  {data.name }</h1>
            <img src={data.image} alt="program.pic" />
            <Typography variant="h5">Type: {data.category}</Typography>
            <Typography variant="h5">Workout description:</Typography>
            <Grid container spacing={2} >

            {workoutsData.map((workout, index) => (
                <Grid item xs={4} mb={4} key={index}>
                    <DisplayCard element={workout} id={index} type="workout" />
                </Grid>
            ))}
            </Grid>
        </>

    )
}
export default Programpage;