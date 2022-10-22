import DisplayCard from "../components/DisplayCard/DisplayCard";
import '../App.css';
import { Grid } from "@mui/material";
import workoutFuncs from "../utils/WorkoutContext";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AddworkoutToGoal from "../components/AddWorkoutToGoal/AddWorkoutToGoal";


//Catalogue to for workouts 
const Workouts = () => {

    const data = workoutFuncs.FetchWorkouts();

    const list = []

    // for (const x of dato){
    //     list.push(x.name)
    // }

    // console.log(list)
    // Hooks
    if (data === undefined) {
        return <>Fetching Workouts...</>
    }

    return (
        <>
            <h1>Workouts</h1>

            <Grid container spacing={2} >
                {data.map((workout, index) => (
                    <Grid item xs={4} mb={4} key={index}>
                        <DisplayCard element={workout} id={index} type="workout" />

                        <AddworkoutToGoal name={"Add Workout To Goal"} 
                        message={"You have added this Workout to your Weekly Goal!"}
                        WorkoutId = {index+1}
                        ></AddworkoutToGoal>

                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default Workouts;