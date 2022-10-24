import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import { useState, useEffect } from 'react';
import goalfuncs from '../../utils/GoalContext';

export default function CheckboxListSecondary({ weekday }) {
  const [checked, setChecked] = React.useState([1]);

  const [workoutsInGoal, setWorkouts] = useState([]);
  const goal = (goalfuncs.FetchAllWorkoutsInGoal(2));
  console.log(weekday)

  useEffect(() => {
    if (goal && goal !== null) {

      setWorkouts(goal)
    }
  }, [goal])

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

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
          arrMon.push(workoutsInGoal[i].name)
          break;
        case "Tuesday":
          arrTue.push(workoutsInGoal[i].name)
          break;
        case "Wednesday":
          arrWed.push(workoutsInGoal[i].name)
          break;
        case "Thursday":
          arrThur.push(workoutsInGoal[i].name)
          break;
        case "Friday":
          arrFri.push(workoutsInGoal[i].name)
          break;
        case "Saturday":
          arrSat.push(workoutsInGoal[i].name)
          break;
        case "Sunday":
          arrSun.push(workoutsInGoal[i].name)
          break;

        default:
          break;
      }
    }
  }

  addToDay();

  return (
    <>
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {weekday === "Monday" &&
          arrMon.map((value) => {
            const labelId = `checkbox-list-secondary-label-${value}`;
            return (
              <ListItem
                key={value}
                secondaryAction={
                  <Checkbox
                    edge="end"
                    onChange={handleToggle(value)}
                    checked={checked.indexOf(value) !== -1}
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                }
                disablePadding
              >
                <ListItemButton>
                  <ListItemText id={labelId} primary={value} />
                </ListItemButton>
              </ListItem>
            );
          })
        }

      </List>
      {weekday === "Tuesday" &&
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {arrTue.map((value) => {
            const labelId = `checkbox-list-secondary-label-${value}`;
            return (
              <ListItem
                key={value}
                secondaryAction={
                  <Checkbox
                    edge="end"
                    onChange={handleToggle(value)}
                    checked={checked.indexOf(value) !== -1}
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                }
                disablePadding
              >
                <ListItemButton>
                  <ListItemText id={labelId} primary={value} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      }
      {weekday === "Wednesday" &&
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {arrWed.map((value) => {
            const labelId = `checkbox-list-secondary-label-${value}`;
            return (
              <ListItem
                key={value}
                secondaryAction={
                  <Checkbox
                    edge="end"
                    onChange={handleToggle(value)}
                    checked={checked.indexOf(value) !== -1}
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                }
                disablePadding
              >
                <ListItemButton>
                  <ListItemText id={labelId} primary={value} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      }
      {weekday === "Thursday" &&
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {arrThur.map((value) => {
            const labelId = `checkbox-list-secondary-label-${value}`;
            return (
              <ListItem
                key={value}
                secondaryAction={
                  <Checkbox
                    edge="end"
                    onChange={handleToggle(value)}
                    checked={checked.indexOf(value) !== -1}
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                }
                disablePadding
              >
                <ListItemButton>
                  <ListItemText id={labelId} primary={value} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      }
      {weekday === "Friday" &&
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {arrFri.map((value) => {
            const labelId = `checkbox-list-secondary-label-${value}`;
            return (
              <ListItem
                key={value}
                secondaryAction={
                  <Checkbox
                    edge="end"
                    onChange={handleToggle(value)}
                    checked={checked.indexOf(value) !== -1}
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                }
                disablePadding
              >
                <ListItemButton>
                  <ListItemText id={labelId} primary={value} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      }
      {weekday === "Saturday" &&
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {arrSat.map((value) => {
            const labelId = `checkbox-list-secondary-label-${value}`;
            return (
              <ListItem
                key={value}
                secondaryAction={
                  <Checkbox
                    edge="end"
                    onChange={handleToggle(value)}
                    checked={checked.indexOf(value) !== -1}
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                }
                disablePadding
              >
                <ListItemButton>
                  <ListItemText id={labelId} primary={value} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      }
      {weekday === "Sunday" &&
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {arrSun.map((value) => {
            const labelId = `checkbox-list-secondary-label-${value}`;
            return (
              <ListItem
                key={value}
                secondaryAction={
                  <Checkbox
                    edge="end"
                    onChange={handleToggle(value)}
                    checked={checked.indexOf(value) !== -1}
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                }
                disablePadding
              >
                <ListItemButton>
                  <ListItemText id={labelId} primary={value} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      }
    </>
  );
}
