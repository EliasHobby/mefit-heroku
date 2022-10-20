import { useEffect } from "react"
import { useKeycloak } from "@react-keycloak/web"

const FetchAccountDetails = () => {

    const { keycloak } = useKeycloak();
    localStorage.clear()

    useEffect(() => {
        const fetchUser = async () => {

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
            // HTTP Get the user
            await fetch("https://apimefit.azurewebsites.net/api/Accounts/user", getRequestOptions)
                .then(response => {
                    // If the user exists in the database, we have the connection between keycloak login and user in database.
                    if (response.ok) {
                        console.log("User found in database: logged in.")
                        return response.json()
                    } else {
                        const postRequestOptions = {
                            authorization: keycloak.token,
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",

                            },
                            body: JSON.stringify({
                                'keycloackId': keycloak.tokenParsed.sub,
                                'firstname': keycloak.tokenParsed.given_name,
                                'lastname': keycloak.tokenParsed.family_name,
                                'email': keycloak.tokenParsed.email
                            }),
                        }
                        // HTTP Post the user
                        fetch("https://apimefit.azurewebsites.net/api/Accounts", postRequestOptions)
                            .then(fetch("https://apimefit.azurewebsites.net/api/Accounts/user", getRequestOptions)
                                .then(response => {
                                    return response.json()
                                })
                                .then(data => localStorage.setItem("user", JSON.stringify(data)))
                            )
                        console.log("User not found in database: created new.");
                    }
                })
                .then(data => {
                    localStorage.setItem("user", JSON.stringify(data))
                })
                .catch(error => {
                    console.error(error.message)
                })
        }
        fetchUser();
    }, [keycloak.token, keycloak.tokenParsed.email, keycloak.tokenParsed.family_name, keycloak.tokenParsed.given_name, keycloak.tokenParsed.sub])
}


export default FetchAccountDetails;
