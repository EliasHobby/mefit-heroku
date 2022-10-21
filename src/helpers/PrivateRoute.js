import { useKeycloak } from "@react-keycloak/web";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
    const { keycloak } = useKeycloak();

    return keycloak.authenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;