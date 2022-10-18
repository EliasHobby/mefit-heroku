import '../App.css';
import { Grid, Typography, CircularProgress } from "@mui/material";
import funcs from "../utils/WorkoutContext"

const Workoutpage = () => {

    const workoutId = window.location.pathname.match(/\d+/)[0];
    const data = funcs.FetchWorkout(workoutId);
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
            <h1>Workout {data.name }</h1>
            <img src={data.image} alt="workout.pic" />
            <Typography variant="h3">{data.name}</Typography>
            <Typography>Exercises: {data.exerciseId}</Typography>
        </>
    )
}
export default Workoutpage;