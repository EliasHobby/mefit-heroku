import { useState } from "react"
import { useEffect } from "react"
import { useKeycloak } from "@react-keycloak/web"

let token;

const FetchAccountDetails = () => {
    
    const { keycloak } = useKeycloak();
    const [data, setData] = useState();
    token = keycloak.tokenParsed.sub;

    useEffect(() => {
        const fetchUser = async () => {
            fetch("https://mefitapi.azure-api.net/api/accounts/user")
                .then(async response => {
                    // If the user exists in the database
                    if (response.ok) {
                        console.log(response)
                        return response.json() // If return is trigged here, go to next .then
                    }
                    // If the user does not exist in the database (first time login) create a new one
                    CreateNewUser("https://mefitapi.azure-api.net/api/accounts/", {
                        'keycloackId': keycloak.tokenParsed.sub,
                        'firstname': keycloak.tokenParsed.given_name,
                        'lastname': keycloak.tokenParsed.family_name,
                    })
                    console.log("Created new user")
                        .then((data) => {
                            console.log(data); // Debugging purposes
                        })
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
        fetchUser();
    }, [keycloak.tokenParsed.email, keycloak.tokenParsed.family_name, keycloak.tokenParsed.given_name, keycloak.tokenParsed.sub])
}

async function CreateNewUser(url = '', data = {}) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Authorization": `bearer ${token}`,
            "Accept": "application/json, text/plain",
            "Content-Type": "application/json",

        },
        body: JSON.stringify(data),
    })
    console.log(JSON.stringify(data))
    return response.json();
}
export default FetchAccountDetails;
