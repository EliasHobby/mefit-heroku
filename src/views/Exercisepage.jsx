import '../App.css';
import { Grid, Typography, CircularProgress } from "@mui/material";
import funcs from "../utils/ExerciseContext"

const Exercisepage = () => {

    const exerciseId = window.location.pathname.match(/\d+/)[0];
    const data = funcs.FetchExercise(exerciseId);
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
            <h1>Exercises</h1>
            <img src={data.image} alt="workout" />
            <Typography variant="h3">{data.name}</Typography>
            <Typography>Description: {data.description}</Typography>
        </>
    )
}
export default Exercisepage;