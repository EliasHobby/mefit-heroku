import { useEffect, useState } from "react";


function FetchGoals() {


    const [data, setData] = useState()

    useEffect(() => {
        const fetchGoals = async () => {
            fetch("https://mefitapi.azure-api.net/api/goals")
                .then(async response => {
                    if (response.ok) {
                        console.log(response)
                        return response.json()
                    }
                })
                .then(data => {
                    setData(data)
                })
                .catch(error => {
                    console.error(error.message)
                })
        }
        fetchGoals();
    }, [])

    return data;

}

function FetchGoal(id) {
    const [goal, setData] = useState()

    useEffect(() => {
        const fetchGoal = async () => {
            fetch("https://mefitapi.azure-api.net/api/goals/" + id)
                .then(async response => {
                    if (response.ok) {
                        console.log(response)
                        return response.json()
                    }
                })
                .then(goal => {
                    setData(goal)
                })
                .catch(error => {
                    console.error(error.message)
                })
        }
        fetchGoal();
    }, [])

    return goal;
}

const funcs = {
    FetchGoals,
    FetchGoal
}

export default funcs