import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

const NotFound = () => {

    return (
        <>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '80vh' }}
            >
                <Typography variant="h1">404</Typography>
                <Typography variant="h3">Page not found</Typography>
                <img src="/images/sadowl.png" alt="404-Owl" style={{marginLeft: -50}}/>
                <Typography variant="h5">Aww heck...</Typography>
                <NavLink to="/dashboard" style={{ my: 2, color: '#1976d2', display: 'block', textDecoration: 'none' }}>Return to Dashboard</NavLink>
            </Grid>
        </>
    );
}
export default NotFound;