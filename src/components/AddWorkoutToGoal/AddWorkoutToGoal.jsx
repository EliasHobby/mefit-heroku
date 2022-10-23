import { Button, Card } from "@mui/material";
import { render } from "@testing-library/react";
import goalfuncs from "../../utils/GoalContext";

const AddWorkoutToGoal = ({ name, message, WorkoutId }) => {

    //GET THE CURRENTLY LOGGED IN USER
    const user = JSON.parse(localStorage.getItem("user"))

    //GET CURRENT WEEK
    const thisWeek = localStorage.getItem("Current Week");

    //GET CURRENT GOAL
    const currentGoal = goalfuncs.FetchGoalByUserAndWeek(user.id, thisWeek);

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

    // ADD WORKOUT TO GOAL
    function AddWorkoutToGoal(message, WorkoutId) {
        alert(message)

        if (!GoalExist()) {
            CreateGoal()
        }
        let arr = new Array();
        arr.push(WorkoutId)

        const goalId = currentGoal.id;
        goalfuncs.AddWorkoutsToGoal(goalId, arr)
    }


    return (
        <>
            <Card textAlign='center'>

                <Button fullWidth="true" onClick={() => AddWorkoutToGoal(message, WorkoutId)}
                    variant="outlined">
                    {name}
                </Button>

            </Card>
        </>
    )

}

export default AddWorkoutToGoal;