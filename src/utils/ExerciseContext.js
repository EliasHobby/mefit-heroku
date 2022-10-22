import { useEffect, useState } from "react";


const apiUrl = "https://apimefit.azurewebsites.net/api/exercises"

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
            headers: { Accept : "application/json, */*",
            "Content-Type": 'application/json'
            },
            body: JSON.stringify({
               'name': exercise.name, 
               'description': exercise.description,
               'target_Muscle_Group': exercise.target_Muscle_Group,
               'image': exercise.image

            }),
        });
        if(!response.ok){
            throw new Error("Could not create exercise with exercise name " + exercise.name)
        } 
        const data = await response.json();
        console.log(data)
    }
    catch(error) {
        console.log(error)
        console.log(exercise)
    }
}



function DeleteExercise(id) {
    const deleteExercise = async () => {

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
    deleteExercise();
}



const exerciseFuncs = {
    FetchExercises,
    FetchExercise,
    CreateExercise,
    DeleteExercise

}



export default exerciseFuncs