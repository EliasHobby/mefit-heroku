import { Box, Button, Card, CardContent } from "@mui/material";
import { NavLink } from 'react-router-dom';
import CreateGoalFuncs from "../../helpers/CreateGoal";
import goalfuncs from "../../utils/GoalContext";

const BigButton = ({ name, message, WorkoutId}) => {

    function BtnClick(message, WorkoutId) {
        Message(message)
        AddWorkoutToGoal(WorkoutId)
    }

    function Message(input){
        alert(input)
    }

    function AddWorkoutToGoal(WorkoutId){
        if(!CreateGoalFuncs.GoalExist){
            CreateGoalFuncs.CreateGoal()
        }

        const goalId = CreateGoalFuncs.GetGoalId()
        goalfuncs.AddWorkoutsToGoal(WorkoutId, goalId)
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