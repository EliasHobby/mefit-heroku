import { Card, Typography, Box } from "@mui/material";
import CheckboxListSecondary from "../components/CheckedList/CheckedList";
import LinearWithValueLabel from "../components/LinearProgressWithLabel/LinearProgressWithLabel";

const Dashboard = () => {
    return (
        <>
            <h1>Dashboard</h1>

            <Card sx={{ p: "20px" }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', mb: '2rem' }}>
                    <Typography variant="h4">Current Goal:</Typography>
                    <Typography variant="h5" sx={{ ml: '2rem' }}>Get Fit in One Month with Arnold Swarzchszenegger</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mb: '1rem' }}>
                    <Typography sx={{ mr: '1rem' }}>Completion: </Typography>
                    <LinearWithValueLabel />
                </Box>
                <Card>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <CheckboxListSecondary />
                        <img style={{ width: 600, maxHeight: 400 }} src="https://image-cdn.essentiallysports.com/wp-content/uploads/arnold-schwarzenegger.jpg" alt="Arnold" />
                    </Box>
                </Card>
            </Card>
        </>
    )
}
export default Dashboard;