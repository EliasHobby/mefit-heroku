import Keycloak from "keycloak-js";
const keycloak = new Keycloak(
    {
        "realm": "mefit",
        "auth-server-url": "https://mefit-keycloak-api.herokuapp.com/auth/",
        "ssl-required": "external",
        "resource": "mefit",
        "public-client": true,
        "confidential-port": 0
    }
);

export default keycloak