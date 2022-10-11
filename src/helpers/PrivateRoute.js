import { useKeycloak } from "@react-keycloak/web";
import Unauthenticated from "../views/Unauthenticated";

const PrivateRoute = ({ children }) => {
 const { keycloak } = useKeycloak();

 const isLoggedIn = keycloak.authenticated;

 return isLoggedIn ? children : <Unauthenticated />;
};

export default PrivateRoute;