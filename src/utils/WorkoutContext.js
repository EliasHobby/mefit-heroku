import {Workout} from "../models/workout"


async function fetchWorkouts() {
    try {
        //placeholder url assumed to be right
        const response = await fetch("https://mefitapi.azure-api.net/api/workouts")
        const jsonWorkouts = await response.json()
        
        return jsonWorkouts
    }
    catch (error) {
        console.error("Error: ", error.message)
    }
}



// Return a list of Goals to be fetched to goals page 
export const listOfWorkouts =  (async () =>{

    // Variables
    const workouts = fetchWorkouts()
        let list = []

    for (const workout in workouts) {
        let thisWorkout = new Workout(workout.workoutId, workout.name, workout.type, workout.image )
        list.push(thisWorkout)

    }

    console.log(list)
    return list
})()


export default listOfWorkouts;