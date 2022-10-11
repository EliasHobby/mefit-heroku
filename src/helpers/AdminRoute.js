import { useKeycloak } from "@react-keycloak/web";
import Unauthorized from "../views/Unauthorized";

const AdminRoute = ({ children }) => {
 const { keycloak } = useKeycloak();

 return keycloak.tokenParsed.roles.includes("admin") ? children : <Unauthorized />;
};

export default AdminRoute;