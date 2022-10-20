import '../App.css';
import { Grid, Typography, CircularProgress } from "@mui/material";
import workoutFuncs from "../utils/WorkoutContext"
import { useEffect } from 'react'; 
import exerciseFuncs  from "../utils/ExerciseContext"
import CardActionArea from '@mui/material';
import { NavLink } from 'react-router-dom';
import DisplayCard from "../components/DisplayCard/DisplayCard";


//Workout page represents a selected/specific workout and related information
const Workoutpage = () => {

    //Workout id of the selected workout
    const workoutId = window.location.pathname.match(/\d+/)[0];
    //Data for the selected workout 
    const data = workoutFuncs.FetchWorkout(workoutId);
    //Data for the exercises in the selected workout
    const exercisedata = workoutFuncs.FetchExercisesInWorkout(workoutId);

    //List to hold specific data for the exercise
    const list = []

    // for (const x of dato){
    //     list.push(x.name)
    // }

    // console.log(list)

    
    if ( data === undefined) {
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
            <h1>Workout  {data.id } :  {data.name }</h1>
            <img src={data.image} alt="workout.pic" />
            <Typography variant="h3">Type: {data.type}</Typography>
            <Typography variant="h3">Workout description:</Typography>
            <Typography><ul>Exercises {list.map((x) => <li>{x}</li>)} </ul> </Typography>
            <Grid container spacing={2} >

            {exercisedata.map((exercise, index) => (
                <Grid item xs={4} mb={4} key={index}>
                    <DisplayCard element={exercise} id={index} type="exercise" />
                </Grid>
            ))}
            </Grid>
        </>
    )
    
}
export default Workoutpage;