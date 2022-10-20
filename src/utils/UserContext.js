import { useEffect } from "react"
import { useKeycloak } from "@react-keycloak/web"

const PatchUserDetails = (measurements) => {
    const { keycloak } = useKeycloak();
    const user = JSON.parse(localStorage.getItem("user"))

    useEffect(() => {
        const patchUser = async () => {
            // Headers for HTTP Get request
            const myHeaders = new Headers();
            myHeaders.append("Authorization", `Bearer ${keycloak.token}`);
            myHeaders.append("Content-Type", "application/json");

             // Request options for HTTP Get request
             const getRequestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            const patchRequestOptions = {
                authorization: keycloak.token,
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify({
                    'weight': measurements.weight,
                    'height': measurements.height
                }),
            }
            // HTTP Patch the user
            fetch("https://apimefit.azurewebsites.net/api/Accounts/" + user.id, patchRequestOptions)
                .then(fetch("https://apimefit.azurewebsites.net/api/Accounts/user", getRequestOptions)
                    .then(response => {
                        return response.json()
                    })
                    .then(data => localStorage.setItem("user", JSON.stringify(data)))
                )
            console.log("User not found in database: created new.");
        }
        patchUser();
    }, [keycloak.token, keycloak.tokenParsed.email, keycloak.tokenParsed.family_name, keycloak.tokenParsed.given_name, keycloak.tokenParsed.sub, measurements.height, measurements.weight, user.id])
}

export default PatchUserDetails;