import { Box, Button, Card, CardContent } from "@mui/material";
import { NavLink } from 'react-router-dom';
import { Navigate } from "react-router-dom/dist";


const GoalButton = () => {

return (
    <>
        <Box>
            <NavLink to="/Programs">
            <Button sx={{ alignItems: 'center', mb: '1rem', mt: '0.5rem' }}
             variant="contained" >Add Program To Goal</Button>
            </NavLink>
        </Box>
        <Box>
            <NavLink to="/Workouts">
                <Button sx={{ alignItems: 'center', mb: '2rem'}}
                variant="contained" >Add Workout To Goal</Button>
            </NavLink>
        </Box>
    </>
)
}
export default GoalButton;