import { Grid } from '@mui/material';


const Workouts = () => {
    return (
        <>
            <h1>Workouts</h1>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '80vh' }}
            >
                <img src="https://i.gifer.com/WI4w.gif" alt="workingout" style={{height: 1000, width: 1000}}/>
            </Grid>
        </>
    )
}
export default Workouts;