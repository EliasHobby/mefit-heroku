import {Exercise} from "../models/exercise"

//add api-call for fetching exercises


async function fetchExercises() {
    try {
        const response = await fetch("https://mefitapi.azure-api.net/api/Exercises")
        console.log(response)
        const jsonExercises = await response.json()
        console.log(jsonExercises)
        return jsonExercises
    }
    catch (error) {
        console.error("Error: ", error.message)
    }
}



// Return a list of excerises 
export const listOfExercises =  (async () =>{

    // Variables
    const exercises = fetchExercises()
    let list = []

    for (const exercise in exercises) {
        let thisExercise = new Exercise(exercise.id, exercise.name, exercise.description, exercise.target_Muscle_Group, exercise.image  )
        list.push(thisExercise)

    }
    console.log(list)
    return list
})()


export default listOfExercises;