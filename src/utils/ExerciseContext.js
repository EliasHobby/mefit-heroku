import {Exercise} from "../models/exercise"

//add api-call for fetching exercises


async function fetchExercises() {
    try {
        const response = await fetch("https://mefitapi.azure-api.net/api/Exercises")
        const jsonExercises = await response.json()
        return jsonExercises
    }
    catch (error) {
        console.error("Error: ", error.message)
    }
}



// Return a list of excerises 
export const listOfExercises =  (async () =>{

    // Variables
    let exercises = await fetchExercises()
    let list = []

    for (const exercise of exercises) {
        let thisExercise =  new Exercise(exercise.id, exercise.name, exercise.description, exercise.target_Muscle_Group, exercise.image  )
        list.push(thisExercise)
    }
    return list
})()


