import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import WorkoutList from '../WorkoutList/WorkoutList'
import { useState, useEffect } from 'react';
import goalfuncs from '../../utils/GoalContext';


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const [workoutsInGoal, setWorkouts] = useState([]);
  const goal = (goalfuncs.FetchAllWorkoutsInGoal(2));

  useEffect(() => {
    if (goal && goal !== null) {

      setWorkouts(goal)
    }
  }, [goal])

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Monday</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <WorkoutList weekday={"Monday"} workoutsInGoal={workoutsInGoal} />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Tuesday</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <WorkoutList weekday={"Tuesday"} workoutsInGoal={workoutsInGoal} />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Wednesday</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <WorkoutList weekday={"Wednesday"} workoutsInGoal={workoutsInGoal} />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>Thursday</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <WorkoutList weekday={"Thursday"} workoutsInGoal={workoutsInGoal} />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>Friday</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <WorkoutList weekday={"Friday"} workoutsInGoal={workoutsInGoal} />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography>Saturday</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <WorkoutList weekday={"Saturday"} workoutsInGoal={workoutsInGoal} />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography>Sunday</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <WorkoutList weekday={"Sunday"} workoutsInGoal={workoutsInGoal} />
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
