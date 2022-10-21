import '../App.css';
import { Grid, Card } from "@mui/material";
import TextMobileStepper from '../components/SwipeProfileCards/SwipeProfileCards';


//Catalogue of all exercises in database
const NewUser = () => {
    return (
        <>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '20vh' }}
            >
                <Card sx={{ p: "20px", mt: "2rem", height: '30vh', width: '50vh' }}>
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        style={{ minHeight: '20vh' }}
                    >
                        <TextMobileStepper />
                    </Grid>
                </Card>
            </Grid>
        </>
    )
}

export default NewUser;