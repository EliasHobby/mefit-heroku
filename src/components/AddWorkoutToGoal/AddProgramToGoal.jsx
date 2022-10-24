import { Button, Card } from "@mui/material";
import { render } from "@testing-library/react";
import goalfuncs from "../../utils/GoalContext";
import programFuncs from "../../utils/TrainingProgramContext";
import workoutFuncs from "../../utils/WorkoutContext";

const AddProgramToGoal = ({ name, message, ProgramId }) => {

    //GET THE CURRENTLY LOGGED IN USER
    const user = JSON.parse(localStorage.getItem("user"))

    //GET CURRENT WEEK
    const thisWeek = localStorage.getItem("Current Week");

    //GET CURRENT GOAL
    const currentGoal = goalfuncs.FetchGoalByUserAndWeek(user.id, thisWeek);

    //GET THE WORKOUTS IN THE PROGRAM
    let workouts = programFuncs.FetchWorkoutsInProgram(ProgramId)


    //CHECK IF A GOAL EXISTS FOR THE CURRENT WEEK
    function GoalExist() {
        if(currentGoal===undefined){
            return false
        }
        return true
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
    function AddWorkoutToGoal(message, workouts) {
        alert(message)

        if (!GoalExist()) {
            CreateGoal()
        }

        let workoutIds = workouts.map((a) => a.id);

        const goalId = currentGoal.id;
        goalfuncs.AddWorkoutsToGoal(goalId, workoutIds)
    }


    return (
        <>
            <Card textalign='center'>

                <Button fullWidth="true" onClick={() => AddWorkoutToGoal(message, workouts)}
                    variant="outlined">
                    {name}
                </Button>

            </Card>
        </>
    )

}

export default AddProgramToGoal;