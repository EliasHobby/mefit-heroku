import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
 url: "https://react-mefit.herokuapp.com/",
 realm: "MeFit",
 clientId: "MeFit",
});

export default keycloak