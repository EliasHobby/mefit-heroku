import DisplayCard from "../components/DisplayCard/DisplayCard";
import '../App.css';
import { Grid } from "@mui/material";
import FetchExercises from "../utils/ExerciseContext";


const Exercises = () => {

    const data = FetchExercises();

    if (data === undefined) {
        return <>Fetching exercises...</>
    }

    return (
        <>
            <h1>Exercises</h1>

            <Grid container spacing={2} >

                {data.map((exercise, index) => (
                    <Grid item xs={4} mb={4} key={index}>
                        <DisplayCard element={exercise} id={index} type="Exercises" />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default Exercises;