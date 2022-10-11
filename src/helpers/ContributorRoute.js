import { useKeycloak } from "@react-keycloak/web";
import Unauthorized from "../views/Unauthorized";

const ContributorRoute = ({ children }) => {
 const { keycloak } = useKeycloak();

 return keycloak.tokenParsed.roles.includes("admin") || keycloak.tokenParsed.roles.includes("contributor") ? children : <Unauthorized />;
};

export default ContributorRoute;