import {Goal} from "../models/goal"


async function fetchGoals() {
    try {
        //placeholder url assumed to be right
        const response = await fetch("https://mefitapi.azure-api.net/api/Goals")
        const jsonGoals = await response.json()
        return jsonGoals
    }
    catch (error) {
        console.error("Error: ", error.message)
    }
}



// Return a list of Goals to be fetched to goals page 
export const listOfGoals =  (async () =>{

    // Variables
    const goals = fetchGoals()
    let list = []

    for (const goal in goals) {
        let thisGoal = new Goal(goal.goal_id, goal.end_date, goal.achieved )
        list.push(thisGoal)

    }
    console.log(list)
    return list
})()


export default listOfGoals;