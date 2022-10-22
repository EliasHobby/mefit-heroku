import { useEffect, useState } from "react";

const apiUrl = "https://apimefit.azurewebsites.net/api/workouts"

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

async function CreateWorkout(workout) {
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                Accept: "application/json, */*",
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                'name': workout.name,
                'type': workout.type,
                'image': workout.image,
                'day': workout.day

            })
        })
        if (!response.ok) {
            throw new Error("Could not create exercise with exercise name " + workout.name)
        }
        const data = await response.json();
        return [null, data]
    }
    catch (error) {
        return [error.message, []]
    }
}

function AddExerciseInWorkout(id, exerciseidlist) {
    const putExercises = async () => {

        const requestOptions = {
            method: "PUT",
            headers: {
                Accept: "application/json, */*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                exerciseidlist
            ),
        }
        console.log(requestOptions)
        await fetch(`${apiUrl}/${id}`, requestOptions)
    };
    putExercises();
}


function DeleteWorkout(id) {
    const deleteWorkout = async () => {

        const requestOptions = {
            method: "DELETE",
            headers: {
                Accept: "application/json, */*",
                "Content-Type": "application/json"
            }
        }
        console.log(requestOptions)
        await fetch(`${apiUrl}/${id}`, requestOptions)
    };
    deleteWorkout();
}

const workoutFuncs = {
    FetchWorkouts,
    FetchWorkout,
    FetchExercisesInWorkout,
    CreateWorkout,
    AddExerciseInWorkout,
    DeleteWorkout
}

export default workoutFuncs