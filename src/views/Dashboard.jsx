import { Card, Typography, Box, Button, Grid } from "@mui/material";
import LinearWithValueLabel from "../components/LinearProgressWithLabel/LinearProgressWithLabel";
import WeekDateDisplayer from "../components/WeekDateDisplayer/WeekDateDisplayer";
import dashboardfuncs from "../utils/DashboardContext";
import WeekDayAccordion from "../components/WeekdayAccordion/WeekdayAccordion"
import SimpleButton from "../components/Buttons/SimpleButton";
import goalfuncs from "../utils/GoalContext";
import DisplayCard from "../components/DisplayCard/DisplayCard";
import workoutFuncs from "../utils/WorkoutContext";

const Dashboard = () => {

    // //GET THE CURRENTLY LOGGED IN USER
    // const user = JSON.parse(localStorage.getItem("user"))

    // //GET CURRENT WEEK
    // const thisWeek = localStorage.getItem("Current Week");

    // //GET CURRENT GOAL
    // const currentGoal = goalfuncs.FetchGoalByUserAndWeek(user.id, thisWeek);

    //replace 2 with currentgoal
    const data = goalfuncs.FetchAllWorkoutsInGoal(2)

    if (data === undefined) {
        return <>Fetching Dashboard...</>
    }


    return (
        <>
        
            <Card sx={{ p: "20px", mt: "2rem" }}>
                <WeekDateDisplayer />
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mb: '1rem' }}>
                    <Typography sx={{ mr: '1rem' }}>Completion: </Typography>
                    <LinearWithValueLabel />
                </Box>
                    <Box sx={{ alignItems: 'center', mb: '1rem', mt: '1rem' }}>
                        <SimpleButton name={"Add Programs To Goal"} url={"/Programs"}></SimpleButton>
                    </Box>
                    <Box sx={{ alignItems: 'center', mb: '1rem', mt: '1rem' }}>
                        <SimpleButton name={"Add Workouts To Goal"} url={"/Workouts"}></SimpleButton>
                    </Box>
                <Card>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
                        {/* <WeekDayAccordion /> */}
                    </Box>
                </Card>
            </Card>

            <Grid container spacing={2} >
                {data.map((workout, index) => (
                    <Grid item xs={4} mb={4} key={index}>
                        <DisplayCard element={workout} id={index} type="workout" />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}
export default Dashboard;
