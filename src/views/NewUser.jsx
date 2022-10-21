import '../App.css';
import { Grid, Typography, Card, Button } from "@mui/material";
import PatchUserDetails from '../utils/UserContext';


//Catalogue of all exercises in database
const NewUser = () => {


    const measurements = {
        height: 800,
        weight: 40
    }
    PatchUserDetails(measurements);


    return (
        <>
            <Card sx={{ p: "20px", mt: "2rem" }}>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '20vh' }}
                >
                    <Typography variant="h3">🛑 Holdup 🛑</Typography>
                    <Typography variant="h5">As a new user, you haven't had a chance to provide your height or weight measurements.</Typography>
                    <Typography variant="h7">But don't worry, we have done it for you. You can now navigate on this website.</Typography>
                    <Typography variant="h9">Elias jobber iherdig med å ha user-input her istedenfor at målene blir automatisk satt, men patch-metoden virker i hvert fall foreløpig 🙇‍♂️</Typography>
                </Grid>

            </Card>
        </>
    )
}

export default NewUser;