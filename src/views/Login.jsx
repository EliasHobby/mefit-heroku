import { useKeycloak } from '@react-keycloak/web';
import { Button, Typography, Box, Grid } from '@mui/material';

const Login = () => {
    const { keycloak } = useKeycloak();
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
                <Button color="primary" variant="contained" onClick={() => keycloak.login()}>Login</Button>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>
                    <Typography variant="h8">New user?</Typography>
                    <Button color="primary" variant="text" onClick={() => keycloak.register()}>Register</Button>
                </Box>
            </Grid>

        </>
    )
}
export default Login;