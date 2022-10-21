import { Box, Button, Card, CardContent } from "@mui/material";
import { NavLink } from 'react-router-dom';

const BigButton = ({ name, message, WorkoutId}) => {

    function BtnClick(message, WorkoutId) {
        Message(message)
        AddWorkoutToGoal(WorkoutId)
    }

    function Message(input){
        alert(input)
    }

    function AddWorkoutToGoal(WorkoutId){
        alert(WorkoutId)
    }

return (
    <>
        <Card textAlign='center'>
            
                <Button fullWidth="true" onClick={() => BtnClick(message, WorkoutId)}
                variant="outlined">
                {name}
                </Button>
            
        </Card>
    </>
)
}
export default BigButton;