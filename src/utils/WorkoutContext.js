import { useEffect, useState } from "react";


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

const funcs = {
    FetchWorkouts,
    FetchWorkout
}

export default funcs