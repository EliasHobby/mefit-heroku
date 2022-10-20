import { useEffect, useState } from "react";


function FetchGoals() {
    const [goals, setGoals] = useState();

    // Then we fetch the goals using the users id
    useEffect(() => {
        const fetchGoals = async () => {
            fetch("https://apimefit.azurewebsites.net/api/goals/")
                .then(async response => {
                    if (response.ok) {
                        console.log("FetchGoals response:")
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
    }, [])

    return goals;
}

const dashboardfuncs = {
    FetchGoals,
}

export default dashboardfuncs;