import DisplayCard from "../components/DisplayCard/DisplayCard";
import '../App.css';
import { Grid, CircularProgress } from "@mui/material";
import exerciseFuncs from "../utils/ExerciseContext";


//Catalogue of all exercises in database
const Exercises = () => {
    //Fetch for all exercises
    const data = exerciseFuncs.FetchExercises();

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
            <h1>Exercises</h1>

            <Grid container spacing={2} >

                {data.map((exercise, index) => (
                    <Grid item xs={4} mb={4} key={index}>
                        <DisplayCard element={exercise} id={index} type="Exercise" />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default Exercises;