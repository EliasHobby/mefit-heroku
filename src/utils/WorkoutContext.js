import { useEffect, useState } from "react";

const apiUrl = "https://mefitapi.azure-api.net/api/Workouts"

function FetchWorkouts() {


    const [data, setData] = useState()

    useEffect(() => {
        const fetchWorkouts = async () => {
            fetch("https://mefitapi.azure-api.net/api/workouts")
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
        fetchWorkouts();
    }, [])

    return data;

}

function FetchWorkout(id) {
    const [workout, setData] = useState()

    useEffect(() => {
        const fetchWorkout = async () => {
            fetch("https://mefitapi.azure-api.net/api/workouts/" + id)
                .then(async response => {
                    if (response.ok) {
                        console.log(response)
                        return response.json()
                    }
                })
                .then(workout => {
                    setData(workout)
                })
                .catch(error => {
                    console.error(error.message)
                })
        }
        fetchWorkout();
    }, [])

    return workout;
}

function FetchExercisesInWorkout(id) {
    const [exercises, setData] = useState()

    useEffect(() => {
        const fetchExercisesInWorkout = async () => {
            fetch("https://apimefit.azurewebsites.net/api/workouts/ExerciseInWorkout/" + id)
                .then(async response => {
                    if (response.ok) {
                        console.log(response)
                        return response.json()
                    }
                })
                .then(exercises => {
                    setData(exercises)
                })
                .catch(error => {
                    console.error(error.message)
                })
        }
        fetchExercisesInWorkout();
    }, [])

    return exercises;
}

const CreateWorkout = async (workout) => {
    try{
        const response = await fetch(apiUrl, {
            method: "POST",
            header: { Accept: "application/json, */*",
            "Content-Type": 'application/json'
            },
            body: JSON.stringify({
               Name: workout.Name, 
               Type: workout.Type,
               Image: workout.Image,
               Day: workout.Day
               

            })
        })
        if(!response.ok){
            throw new Error("Could not create exercise with exercise name " + workout)
        } 
        const data = await response.json();
        return [null, data]
    }
    catch(error) {
        return [error.message, []]
    }
}
const workoutFuncs = {
    FetchWorkouts,
    FetchWorkout,
    FetchExercisesInWorkout,
    CreateWorkout
}

export default workoutFuncs