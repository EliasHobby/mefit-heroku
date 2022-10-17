import { Navigate } from "react-router";
import { useKeycloak } from "@react-keycloak/web";
import FetchAccountDetails from "../helpers/LoginHelper";


const HandleLogin = () => {
    const { keycloak } = useKeycloak();

    FetchAccountDetails(keycloak.tokenParsed.sub)

    localStorage.setItem('keycloakId', keycloak.tokenParsed.sub);
    localStorage.setItem('name', keycloak.tokenParsed.given_name);

    return (
        <>
            <Navigate to="/dashboard" />
        </>
    )
}
export default HandleLogin;