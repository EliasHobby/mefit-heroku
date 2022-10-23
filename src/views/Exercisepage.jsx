import '../App.css';
import { Grid, Typography, CircularProgress, Card } from "@mui/material";
import exerciseFuncs from "../utils/ExerciseContext"

const Exercisepage = () => {

    const exerciseId = window.location.pathname.match(/\d+/)[0];
    const data = exerciseFuncs.FetchExercise(exerciseId);

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
        <Card>
            <h1>{data.name}</h1>
            <img src={data.image} alt="Exercise.Picture" />
            <Typography>{data.description}</Typography>
        </Card>
        </>
    )
}
export default Exercisepage;