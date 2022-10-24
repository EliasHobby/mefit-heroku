import { useEffect, useState } from "react";
//Asd

const apiUrl = "https://apimefit.azurewebsites.net/api/goals"

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



function FetchGoal(id) {
    const [goal, setData] = useState()

    useEffect(() => {
        const fetchGoal = async () => {
            fetch("https://apimefit.azurewebsites.net/api/goals/" + id)
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


function FetchGoalByUserAndWeek(id, week) {
    const [goal, setData] = useState()

    useEffect(() => {
        const fetchGoal = async () => {
            fetch("https://apimefit.azurewebsites.net/api/goals/IdAndWeek/" + id + "?week=" + week)
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



async function CreateGoal(goal) {
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                Accept: "application/json, */*",
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                'week': goal.week,
                'achieved': goal.achieved,
                'accountId': goal.accountId
            }),
        });
        if (!response.ok) {
            throw new Error("Could not create goal")
        }
        const data = await response.json();
        console.log(data)
    }
    catch (error) {
        console.log(error)
        console.log(goal)
    }
}

async function AddWorkoutsToGoal(id, workoutidlist) {
    const putWorkoutsInGoal = async () => {

        const requestOptions = {
            method: "PUT",
            headers: {
                Accept: "application/json, */*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                workoutidlist
            ),
        }
        await fetch("https://apimefit.azurewebsites.net/api/goals/"+id, requestOptions)
    };
    putWorkoutsInGoal();
}



const goalfuncs = {
    FetchGoals,
    CreateGoal,
    AddWorkoutsToGoal,
    FetchGoal,
    FetchGoalByUserAndWeek
}

export default goalfuncs;