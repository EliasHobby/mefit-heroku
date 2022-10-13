import { useKeycloak } from "@react-keycloak/web";
import Login from "../views/Login";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
 const { keycloak } = useKeycloak();

 const isLoggedIn = keycloak.authenticated;

 return isLoggedIn ? children : <Navigate to="/" />;
};

export default PrivateRoute;