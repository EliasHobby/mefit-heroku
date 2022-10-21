import { useEffect, useState } from "react";

const apiUrl = "https://apimefit.azurewebsites.net/api/goals/"

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

async function CreateGoal (goal)  {
    try{
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: { Accept : "application/json, */*",
            "Content-Type": 'application/json'
            },
            body: JSON.stringify({
               'week': goal.week,
               'achieved': goal.achieved,
               'accountId': goal.accountId
            }),
        });
        if(!response.ok){
            throw new Error("Could not create goal")
        }
        const data = await response.json();
        console.log(data)
    }
    catch(error) {
        console.log(error)
        console.log(goal)
    }
}


async function AddWorkoutsToGoal (workoutidlist, id ){
    try{
        const response = await fetch(apiUrl + "/" + id, {
        method:"PUT",
        headers: { Accept: "application/json, */*",
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            workoutId: workoutidlist
        })
    })
    if(!response.ok){
        throw new Error("Could not put exercise in workout")
    }
    const data = await response.json();
    return [null, data]
    }
    catch(error) {
        return [error.message, []]
    }
}



const goalfuncs = {
    FetchGoals,
    AddWorkoutsToGoal
}

export default goalfuncs;