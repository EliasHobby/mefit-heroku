import { Typography } from "@mui/material"
import { Button } from "@mui/material";
import { useKeycloak } from '@react-keycloak/web';

const Unauthenticated = () => {
    
  const { keycloak } = useKeycloak();
    return (
        <div>
            <Typography variant="h3">
                You must be logged in to view this page.
            </Typography>
            <Button color="primary" variant="contained" onClick={() => keycloak.login()}>Login</Button>
        </div>
    )
}
export default Unauthenticated;