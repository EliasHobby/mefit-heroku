import { useEffect, useState } from "react";


function FetchExercises() {


    const [data, setData] = useState()

    useEffect(() => {
        const fetchExercises = async () => {
            fetch("https://mefitapi.azure-api.net/api/Exercises")
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
        fetchExercises();
    }, [])

    return data;

}

function FetchExercise(id) {
    const [exercise, setData] = useState()

    useEffect(() => {
        const fetchExercises = async () => {
            fetch("https://mefitapi.azure-api.net/api/Exercises/" + id)
                .then(async response => {
                    if (response.ok) {
                        console.log(response)
                        return response.json()
                    }
                })
                .then(exercise => {
                    setData(exercise)
                })
                .catch(error => {
                    console.error(error.message)
                })
        }
        fetchExercises();
    }, [])

    return exercise;
}

const exerciseFuncs = {
    FetchExercises,
    FetchExercise
}

export default exerciseFuncs