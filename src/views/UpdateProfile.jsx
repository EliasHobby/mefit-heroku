import '../App.css';
import { Grid, Typography, Card, Box } from "@mui/material";
import { FormControl, InputLabel, Input, FormHelperText } from '@mui/material';


//Catalogue of all exercises in database
const UpdateProfile = () => {
    return (
        <>
            <Card sx={{ p: "20px", mt: "2rem" }}>
                <Typography variant="h4">Edit profile</Typography>
                <Box>
                    <FormControl>
                        <InputLabel htmlFor="my-input">Email address</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" />
                        <FormHelperText id="my-helper-text">Weight</FormHelperText>
                    </FormControl>
                </Box>

            </Card>
        </>
    )
}

export default UpdateProfile;