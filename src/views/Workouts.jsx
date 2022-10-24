import DisplayCard from "../components/DisplayCard/DisplayCard";
import '../App.css';
import { Grid } from "@mui/material";
import workoutFuncs from "../utils/WorkoutContext";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import AddWorkoutToGoal from "../components/AddWorkoutToGoal/AddWorkoutToGoal";


//Catalogue to for workouts 
const Workouts = () => {

    const data = workoutFuncs.FetchWorkouts();

    const list = []


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

                        {/* <AddWorkoutToGoal name={"Add Workout To Goal"} 
                        message={"You have added this Workout to your Weekly Goal!"}
                        WorkoutId = {index+1}
                        ></AddWorkoutToGoal> */}

                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default Workouts;