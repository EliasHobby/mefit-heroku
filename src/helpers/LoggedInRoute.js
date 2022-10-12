import { useKeycloak } from "@react-keycloak/web";
import { Navigate } from "react-router";

const LoggedInRoute = ({ children }) => {
 const { keycloak } = useKeycloak();

 const isLoggedIn = keycloak.authenticated;

 return isLoggedIn ? <Navigate to="/dashboard" /> : children;
};

export default LoggedInRoute;