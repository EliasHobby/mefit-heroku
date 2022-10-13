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
                .then(response => {
                    if (response.ok) {
                        console.log(response)
                        return response.json()
                    }
                    CreateNewUser();
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

const CreateNewUser = () => {
    const { keycloak } = useKeycloak();
    
    const headers = {
        "Content-Type": "application/json",
    };
    useEffect(() => {
        const postUser = async () => {

            fetch("https://mefitapi.azure-api.net/api/accounts", {
                method: "POST",
                headers,
                body: JSON.stringify({
                    keycloakId: keycloak.tokenParsed.sub,
                    firstname: keycloak.tokenParsed.given_name,
                    lastname: keycloak.tokenParsed.family_name
                }),
            })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            })
        }
        postUser();
        }, [])
    }
export default FetchAccountDetails;
