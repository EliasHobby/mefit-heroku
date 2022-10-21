import DisplayCard from "../components/DisplayCard/DisplayCard";
import AddExerciseToWorkoutCard from "../components/DisplayCard/AddExerciseToWorkoutCard";
import '../App.css';
import { Grid, CircularProgress, Grid, Button } from "@mui/material";
import exerciseFuncs from "../utils/ExerciseContext";


//Catalogue of all exercises in database
const ExercisesInWorkout = () => {
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

            <Box>
            <NavLink to="/Contibutors/Workout">
            <Button sx={{ alignItems: 'center', mb: '1rem', mt: '0.5rem' }}
             variant="contained" >Back to create workout</Button>
            </NavLink>
        </Box>

            <Grid container spacing={2} >

                {data.map((exercise, index) => (
                    <Grid item xs={4} mb={4} key={index}>
                        <AddExerciseToWorkoutCard element={exercise} id={index} type="Exercise" />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default ExercisesInWorkout