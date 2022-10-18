import { useEffect, useState } from "react";
import { useKeycloak } from '@react-keycloak/web';

function FetchUser() {
    const { keycloak } = useKeycloak();
    const [user, setUser] = useState();

    // First fetch the user account so we know which id to fetch goals from
    useEffect(() => {
        const fetchUser = async () => {
            fetch("https://mefitapi.azure-api.net/api/Accounts/" + keycloak.tokenParsed.sub + "/KeyCloak")
                .then(async response => {
                    if (response.ok) {
                        console.log(response)
                        return response.json()
                    }
                })
                .then(user => {
                    setUser(user)
                })
                .catch(error => {
                    console.error(error.message)
                })
        }
        fetchUser();
    }, [keycloak.tokenParsed.sub])
    return user;
}

function FetchGoals() {
    const [goals, setGoals] = useState();
    const user = FetchUser();
    console.log(user);

    // First fetch the user account so we know which id to fetch goals from
    useEffect(() => {
        const fetchGoals = async () => {
            fetch("https://mefitapi.azure-api.net/api/goals/" + user)
                .then(async response => {
                    if (response.ok) {
                        console.log(response)
                        return response.json()
                    }
                })
                .then(data => {
                    setGoals(data)
                })
                .catch(error => {
                    console.error(error.message)
                })
        }
        fetchGoals();
    }, [user])

    return goals;
}

const goalfuncs = {
    FetchGoals,
}

export default goalfuncs;