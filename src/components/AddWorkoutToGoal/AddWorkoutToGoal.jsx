import { Button, Card } from "@mui/material";
import goalfuncs from "../../utils/GoalContext";

const BigButton = ({ name, message, WorkoutId }) => {

    //GET THE CURRENTLY LOGGED IN USER
    const user = JSON.parse(localStorage.getItem("user"))

    //GET CURRENT WEEK
    const thisWeek = localStorage.getItem("Current Week");

    //GET CURRENT GOAL
    const currentGoal = goalfuncs.FetchGoalByUserAndWeek(user.id, thisWeek);

    console.log(currentGoal)
    console.log("CURRENT TEST")
    //CHECK IF A GOAL EXISTS FOR THE CURRENT WEEK
    function GoalExist() {
        if(currentGoal===undefined){
            return false
        }
        else{
            return true
        }
    }

    //CREATE A GOAL
    function CreateGoal() {
        const newGoal = {
            week: thisWeek,
            achieved: false,
            accountId: user.id
        }

        goalfuncs.CreateGoal(newGoal)
    }

    //GET THE ID OF THE CURRENT WEEKS GOAL
    function GetGoalId() {
        return currentGoal.id
    }


    // BUTTON FUNCTION
    function BtnClick(message, WorkoutId) {
        alert(message)
        AddWorkoutToGoal(WorkoutId)
    }

    // ADD WORKOUT TO GOAL
    function AddWorkoutToGoal(WorkoutId) {
        if (!GoalExist()) {
            CreateGoal()
        }

        const goalId = GetGoalId()
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