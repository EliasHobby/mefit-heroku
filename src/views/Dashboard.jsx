import { Card, Typography, Box, IconButton } from "@mui/material";
import CheckboxListSecondary from "../components/CheckedList/CheckedList";
import LinearWithValueLabel from "../components/LinearProgressWithLabel/LinearProgressWithLabel";
import { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Dashboard = () => {


    // Get the current week
    let goalDate = new Date();
    const oneJan = new Date(goalDate.getFullYear(), 0, 1);
    const numberOfDays = Math.floor((goalDate - oneJan) / (24 * 60 * 60 * 1000));
    let currentWeek = Math.ceil((goalDate.getDay() + 1 + numberOfDays) / 7);
    const [weekKey, setWeekKey] = useState(currentWeek);

    // Get first and last day of the week
    const [firstDay, setFirstDay] = useState(new Date(goalDate.setDate(goalDate.getDate() + 1 - goalDate.getDay())));
    const [lastDay, setLastDay] = useState(new Date(goalDate.setDate(goalDate.getDate() + 1 - goalDate.getDay() + 6)));

    // Format to dd.mm
    let fmm = firstDay.getMonth() + 1; // Months start at 0!
    let fdd = firstDay.getDate();
    let lmm = lastDay.getMonth() + 1;
    let ldd = lastDay.getDate();

    // Add leading 0's if the number is below 10
    if (fdd < 10) fdd = '0' + fdd;
    if (fmm < 10) fmm = '0' + fmm;
    if (ldd < 10) ldd = '0' + ldd;
    if (lmm < 10) lmm = '0' + lmm;


    const handleNextWeek = () => {
        // Update the week
        setWeekKey(key => key + 1)

        // Update the dates
        goalDate = new Date(goalDate.getTime() + (7 * 24 * 60 * 60 * 1000))
        setFirstDay(new Date(firstDay.getTime() + (7 * 24 * 60 * 60 * 1000)))
        setLastDay(new Date(lastDay.getTime() + (7 * 24 * 60 * 60 * 1000)))

        // Format
        fmm = firstDay.getMonth() + 1; // Months start at 0!
        fdd = firstDay.getDate();
        lmm = lastDay.getMonth() + 1;
        ldd = lastDay.getDate();
        if (fdd < 10) fdd = '0' + fdd;
        if (fmm < 10) fmm = '0' + fmm;
        if (ldd < 10) ldd = '0' + ldd;
        if (lmm < 10) lmm = '0' + lmm;

    }

    const handlePreviousWeek = () => {
        // Update the week
        setWeekKey(key => key - 1)

        // Update the days
        goalDate = new Date(goalDate.getTime() - (7 * 24 * 60 * 60 * 1000))
        setFirstDay(new Date(firstDay.getTime() - (7 * 24 * 60 * 60 * 1000)))
        setLastDay(new Date(lastDay.getTime() - (7 * 24 * 60 * 60 * 1000)))

        // Format
        fmm = firstDay.getMonth() + 1; // Months start at 0!
        fdd = firstDay.getDate();
        lmm = lastDay.getMonth() + 1;
        ldd = lastDay.getDate();
        if (fdd < 10) fdd = '0' + fdd;
        if (fmm < 10) fmm = '0' + fmm;
        if (ldd < 10) ldd = '0' + ldd;
        if (lmm < 10) lmm = '0' + lmm;
    }

    return (
        <>
            <Card sx={{ p: "20px", mt: "2rem" }} key={weekKey}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', mb: '2rem' }}>
                    <Typography variant="h4">Week {weekKey}</Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mb: '2rem' }}>
                    <IconButton onClick={handlePreviousWeek}
                        size="small"
                        sx={{
                            ml: 1,
                            "&.MuiButtonBase-root:hover": {
                                bgcolor: "transparent"
                            }
                        }}>
                        <ArrowBackIosIcon />
                    </IconButton>
                    <Typography variant="h7">Mon {fdd}.{fmm} - Sun {ldd}.{lmm}</Typography>
                    <IconButton onClick={handleNextWeek}
                        size="small"
                        sx={{
                            ml: 1,
                            "&.MuiButtonBase-root:hover": {
                                bgcolor: "transparent"
                            }
                        }}><ArrowForwardIosIcon /></IconButton>
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