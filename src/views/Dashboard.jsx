import { Card, Typography, Box, Button } from "@mui/material";
import LinearWithValueLabel from "../components/LinearProgressWithLabel/LinearProgressWithLabel";
import WeekDateDisplayer from "../components/WeekDateDisplayer/WeekDateDisplayer";
import dashboardfuncs from "../utils/DashboardContext";
import WeekDayAccordion from "../components/WeekdayAccordion/WeekdayAccordion"
import SimpleButton from "../components/Buttons/SimpleButton";

const Dashboard = () => {



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
        </>
    )
}
export default Dashboard;
