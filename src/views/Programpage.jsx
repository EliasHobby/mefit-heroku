import '../App.css';
import { Grid, Typography, CircularProgress } from "@mui/material";
import programFuncs from "../utils/TrainingProgramContext"
import funcs from "../utils/WorkoutContext"

const Programpage = () => {

    const programId = window.location.pathname.match(/\d+/)[0];
    const data = programFuncs.FetchTrainingProgram(programId);
    // const workoutId = data.workoutId
    //let work =  funcs.FetchWorkout(data.workoutId[1])

    console.log(data)

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
            <h1>Training program: </h1>
            <Typography variant="h3">{data.name}</Typography>
            <img src={data.image} alt="training-program-pic" />
            <Typography>Category : {data.category}</Typography>
            <Typography>WorkoutID : {data.workoutId}</Typography>
        </>
    )
}
export default Programpage;