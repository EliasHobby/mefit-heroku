import { Typography } from "@mui/material";
import { useKeycloak } from "@react-keycloak/web";

const Profile = () => {
    const { keycloak } = useKeycloak();
    return (
        <>
            <h1>Profile</h1>
            <Typography variant="h5">Hi {keycloak.tokenParsed.name} the {keycloak.tokenParsed.roles[0]}.</Typography>
        </>
    )
}
export default Profile;