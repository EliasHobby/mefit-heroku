import { useState } from "react"
import { useEffect } from "react"
import { useKeycloak } from "@react-keycloak/web"

const FetchAccountDetails = () => {

    const { keycloak } = useKeycloak();
    const [data, setData] = useState();

    useEffect(() => {
        const fetchUser = async () => {
            console.log(keycloak.token)

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

            await fetch("https://apimefit.azurewebsites.net/api/Accounts/user", getRequestOptions)
                .then(response => {
                    // If the user exists in the database
                    if (response.ok) {
                        console.log(response)
                        console.log("OK")
                        return response.json() // If return is trigged here, go to next .then
                    }
                    else {
                        // If response wasn't OK, create a new user in the DB (first time login)
                        const postRequestOptions = {
                            authorization: keycloak.token,
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",

                            },
                            body: JSON.stringify({
                                'keycloackId': keycloak.tokenParsed.sub,
                                'firstname': keycloak.tokenParsed.given_name,
                                'lastname': keycloak.tokenParsed.family_name
                            }),
                        }
                        fetch("https://apimefit.azurewebsites.net/api/Accounts", postRequestOptions)
                            .then(response => response.json())
                            .then(data => setData(data))
                        console.log("Created new user")
                        return response.json()
                    }
                })
                .then(data => {
                    console.log(data);

                    const _userData = {
                        id: data.id,
                        weight: data.weight,
                        height: data.height,
                    }
                    setData(_userData)
                    localStorage.setItem('height', data.height)
                    localStorage.setItem('weight', data.weight)
                })
                .catch(error => {
                    console.error(error.message)
                })
        }
        if (keycloak.token) fetchUser();
    }, [keycloak.token, keycloak.tokenParsed.email, keycloak.tokenParsed.family_name, keycloak.tokenParsed.given_name, keycloak.tokenParsed.sub])
}

export default FetchAccountDetails;
