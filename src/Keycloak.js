import Keycloak from "keycloak-js";
const keycloak = new Keycloak(
    {
        "realm": "mefit",
        "url": "https://mefit-keycloak-api.herokuapp.com/auth/",
        "clientId": "mefit",
        "public-client": true,
        "ssl-required": "external",
        "confidential-port": 0
      }
);

export default keycloak