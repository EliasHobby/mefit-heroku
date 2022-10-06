import Keycloak from "keycloak-js";
const keycloak = new Keycloak(
    {
        realm: "mefit",
        url: "https://mefit-keycloak-api.herokuapp.com/auth/",
        clientId: "mefit"
      }
);

export default keycloak