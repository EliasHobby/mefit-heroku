import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { useState, useEffect } from 'react';
import goalfuncs from '../../utils/GoalContext';
import { Typography } from '@mui/material';
import WorkoutListItem from './WorkoutListItem';

export default function CheckboxListSecondary({ weekday, workoutsInGoal }) {

  const arrMon = [];
  const arrTue = [];
  const arrWed = [];
  const arrThur = [];
  const arrFri = [];
  const arrSat = [];
  const arrSun = [];

  const addToDay = () => {
    for (let i = 0; i < workoutsInGoal.length; i++) {
      switch (workoutsInGoal[i].day) {
        case "Monday":
          arrMon.push(workoutsInGoal[i])
          break;
        case "Tuesday":
          arrTue.push(workoutsInGoal[i])
          break;
        case "Wednesday":
          arrWed.push(workoutsInGoal[i])
          break;
        case "Thursday":
          arrThur.push(workoutsInGoal[i])
          break;
        case "Friday":
          arrFri.push(workoutsInGoal[i])
          break;
        case "Saturday":
          arrSat.push(workoutsInGoal[i])
          break;
        case "Sunday":
          arrSun.push(workoutsInGoal[i])
          break;

        default:
          break;
      }
    }
  }

  addToDay();


  return (
    <>
      {weekday === "Monday" && arrMon.length === 0 && <Typography>You have no workouts listed today.</Typography>}
      {weekday === "Monday" && arrMon.length !== 0 && <WorkoutListItem arr={arrMon} />}

      {weekday === "Tuesday" && arrTue.length === 0 && <Typography>You have no workouts listed today.</Typography>}
      {weekday === "Tuesday" && <WorkoutListItem arr={arrTue} />}

      {weekday === "Wednesday" && arrWed.length === 0 && <Typography>You have no workouts listed today.</Typography>}
      {weekday === "Wednesday" && <WorkoutListItem arr={arrWed} />}

      {weekday === "Thursday" && arrThur.length === 0 && <Typography>You have no workouts listed today.</Typography>}
      {weekday === "Thursday" && <WorkoutListItem arr={arrThur} />}

      {weekday === "Friday" && arrFri.length === 0 && <Typography>You have no workouts listed today.</Typography>}
      {weekday === "Friday" && <WorkoutListItem arr={arrFri} />}

      {weekday === "Saturday" && arrSat.length === 0 && <Typography>You have no workouts listed today.</Typography>}
      {weekday === "Saturday" && <WorkoutListItem arr={arrSat} />}

      {weekday === "Sunday" && arrSun.length === 0 && <Typography>You have no workouts listed today.</Typography>}
      {weekday === "Sunday" && <WorkoutListItem arr={arrSun} />}
    </>
  );
}
