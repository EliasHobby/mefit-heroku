import { Description, JavascriptOutlined } from "@mui/icons-material";
import { useEffect, useState } from "react";


const apiUrl = "https://mefitapi.azure-api.net/api/Exercises"

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
    }, [id])

    return exercise;
}

async function CreateExercise (exercise)  {
    try{
        const response = await fetch(apiUrl, {
            method: "POST",
            header: { Accept: "application/json, */*",
            "Content-Type": 'application/json'
            },
            body: JSON.stringify({
               Name: exercise.Name, 
               Description: exercise.Description,
               Target_Muscle_Group: exercise.Target_Muscle_Group,
               Image: exercise.Image

            })
        })
        if(!response.ok){
            throw new Error("Could not create exercise with exercise name " + exercise)
        } 
        const data = await response.json();
        return [null, data]
    }
    catch(error) {
        return [error.message, []]
    }
}

const exerciseFuncs = {
    FetchExercises,
    FetchExercise,
    CreateExercise

}

export default exerciseFuncs