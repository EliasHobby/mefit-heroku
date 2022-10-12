import { useKeycloak } from '@react-keycloak/web';
import { Button, Typography, Box, Grid } from '@mui/material';
import LoginLoader from '../components/LoginLoader/LoginLoader';

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
                <LoginLoader delay="1000">
                    <Button sx={{ width: '100%'}}color="primary" variant="contained" onClick={() => keycloak.login()}>Login</Button>
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>
                        <Typography variant="h8">New user?</Typography>
                        <Button color="primary" variant="text" onClick={() => keycloak.register()}>Register</Button>
                    </Box>
                </LoginLoader>
            </Grid>
        </>
    )
}
export default Login;