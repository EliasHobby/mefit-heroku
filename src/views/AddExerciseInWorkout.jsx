import DisplayCard from "../components/DisplayCard/DisplayCard";
import AddExerciseToWorkoutCard from "../components/DisplayCard/AddExerciseToWorkoutCard";
import "../App.css";
import {
  Grid,
  CircularProgress,
  Box,
  Button,
  CardActionArea,
  Card, 
  Typography
} from "@mui/material";
import exerciseFuncs from "../utils/ExerciseContext";
import { NavLink } from "react-router-dom";
import workoutFuncs from "../utils/WorkoutContext";
import { useState, useEffect} from "react";

//Asd

//Catalogue of all exercises in database
const ExercisesInWorkout = () => {
  //Fetch for all exercises
  const data = exerciseFuncs.FetchExercises();
  const workoutsData = workoutFuncs.FetchWorkouts();
  const  [listExNames, setListExNames] = useState([]);

  const [listOfIds, setListOfIds] = useState([]);

  function handleClick() {
    //amount of workouts in database
    console.log(listOfIds)
    console.log(workoutsData.pop().id)
    workoutFuncs.AddExerciseInWorkout(workoutsData.pop().id +1 , listOfIds);
    alert("ExerciseId added to workout" );
  }



  //Check if data is received from database
  if (data === undefined) {
    return (
      <>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "80vh" }}
        >
          <CircularProgress />
        </Grid>
      </>
    );
  }
  const listItems = listExNames.map((name) =>  <li>{name}</li>);

  return (
    <>
      <h1>Choose exercises to add</h1>
      <Card sx={{ alignItems: "center", mb: "1rem", mt: "0.5rem", position: "fixed", left: 10,  zIndex:2, width:200}}
>
      <Typography variant="h5">Exercises added </Typography>
        <ul>{listItems}</ul>
      </Card>
    
      <Button
        component={NavLink}
        to="/workouts"
        sx={{ alignItems: "center", mb: "1rem", mt: "0.5rem", position: "fixed", bottom: 55,  zIndex:2}}
        variant="contained"
        onClick={handleClick}
      >
        Add exercises to workout
      </Button>

      <Grid container spacing={2}>
        {data.map((exercise, index) => (
          <Grid item xs={4} mb={4} key={index} >
            <CardActionArea
              onClick={() =>
                {listOfIds.push(exercise.id);
                  
                const index = listExNames.indexOf(exercise.name);
                if (index !== -1) {
                  console.log(exercise.name);
                  setListExNames (listExNames=> listExNames.filter((name)=>( name != exercise.name)));
                  console.log(listExNames);
                  } 
                  else {setListExNames(listExNames => [...listExNames, exercise.name]); console.log(listExNames);

                  };
              }
              }
            >
              <AddExerciseToWorkoutCard
                element={exercise}
                id={index}
                type="exercise"
              />
            </CardActionArea>
          </Grid>

        ))}
      </Grid>
    </>
  );
};

export default ExercisesInWorkout;
