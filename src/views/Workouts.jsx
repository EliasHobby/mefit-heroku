import DisplayCard from "../components/DisplayCard/DisplayCard";
import '../App.css';
import { Grid } from "@mui/material";
import funcs from "../utils/WorkoutContext";


const Workouts = () => {

    const data = funcs.FetchWorkouts();

    if (data === undefined) {
        return <>Fetching Workouts...</>
    }

    return (
        <>
            <h1>Workouts</h1>

            <Grid container spacing={2} >

                {data.map((exercise, index) => (
                    <Grid item xs={4} mb={4} key={index}>
                        <DisplayCard element={exercise} id={index} type="workout" />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default Workouts;