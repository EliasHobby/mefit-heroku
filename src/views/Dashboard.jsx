import { Card, Typography, Box, Button } from "@mui/material";
import LinearWithValueLabel from "../components/LinearProgressWithLabel/LinearProgressWithLabel";
import WeekDateDisplayer from "../components/WeekDateDisplayer/WeekDateDisplayer";
import dashboardfuncs from "../utils/DashboardContext";

const Dashboard = () => {

    //Fetch the users' goals
    // const goals = dashboardfuncs.FetchGoals();
    // console.log(goals)

    return (
        <>
            <Card sx={{ p: "20px", mt: "2rem" }}>
                <WeekDateDisplayer />
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mb: '1rem' }}>
                    <Typography sx={{ mr: '1rem' }}>Completion: </Typography>
                    <LinearWithValueLabel />
                </Box>
                <Card>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
                        {/* <WeekDayAccordion /> */}
                    </Box>
                </Card>
            </Card>
        </>
    )
}
export default Dashboard;