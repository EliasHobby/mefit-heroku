import { useKeycloak } from "@react-keycloak/web";
import Unauthorized from "../views/Unauthenticated";

const AdminRoute = ({ children }) => {
 const { keycloak } = useKeycloak();

 return keycloak.tokenParsed.roles.includes("admin") ? children : <Unauthorized />;
};

export default AdminRoute;