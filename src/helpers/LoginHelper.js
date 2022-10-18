import { useState } from "react"
import { useEffect } from "react"
import { useKeycloak } from "@react-keycloak/web"

const FetchAccountDetails = () => {

    const { keycloak } = useKeycloak();
    const [user, setUser] = useState({})
    const [data, setData] = useState({})

    useEffect(() => {
        const fetchUser = async () => {
            fetch("https://mefitapi.azure-api.net/api/accounts/" + keycloak.tokenParsed.sub + "/KeyCloak")
                .then(async response => {
                    // If the user does have a profile
                    if (response.ok) {
                        console.log(response)
                        return response.json() // If breaks here, goes to next .then
                    }
                    // If the user does not have a profile already, create a new one
                    await CreateNewUser("https://mefitapi.azure-api.net/api/accounts/", {
                        "keycloakId": keycloak.tokenParsed.sub,
                        "firstname": keycloak.tokenParsed.given_name,
                        "lastname": keycloak.tokenParsed.family_name
                    })
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
    }, [])
}

async function CreateNewUser(url = '', data = {}) {

    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
    return response.json();
}
export default FetchAccountDetails;
