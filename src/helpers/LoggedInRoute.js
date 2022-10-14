import { useKeycloak } from "@react-keycloak/web";
import { Navigate } from "react-router";

const LoggedInRoute = ({ children }) => {
 const { keycloak } = useKeycloak();

 const isLoggedIn = keycloak.authenticated;

 return isLoggedIn ? <Navigate to="/handlelogin" /> : children;
};

export default LoggedInRoute;