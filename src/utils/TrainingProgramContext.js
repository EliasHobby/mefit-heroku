import { useEffect, useState } from "react";
//Asd

const apiUrl = "https://apimefit.azurewebsites.net/api/TrainingPrograms"

function FetchTrainingPrograms() {


    const [data, setData] = useState()

    useEffect(() => {
        const fetchTrainingPrograms = async () => {
            fetch("https://mefitapi.azure-api.net/api/trainingprograms")
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
        fetchTrainingPrograms();
    }, [])

    return data;

}
function FetchWorkoutsInProgram(id) {
    const [workouts, setData] = useState()

    useEffect(() => {
        const fetchWorkoutsInProgram = async () => {
            fetch("https://apimefit.azurewebsites.net/api/trainingPrograms/WorkoutInTrainingProgram/" + id)
                .then(async response => {
                    if (response.ok) {
                        console.log(response)
                        return response.json()
                    }
                })
                .then(workouts => {
                    setData(workouts)
                })
                .catch(error => {
                    console.error(error.message)
                })
        }
        fetchWorkoutsInProgram();
    }, [])
    return workouts;
}

function FetchTrainingProgram(id) {
    const [trainingProgram, setData] = useState()

    useEffect(() => {
        const fetchTrainingProgram = async () => {
            fetch("https://mefitapi.azure-api.net/api/trainingprograms/" + id)
                .then(async response => {
                    if (response.ok) {
                        console.log(response)
                        return response.json()
                    }
                })
                .then(trainingProgram => {
                    setData(trainingProgram)
                })
                .catch(error => {
                    console.error(error.message)
                })
        }
        fetchTrainingProgram();
    }, [])

    return trainingProgram;
}

async function CreateTrainingProgram (trainingProgram) {
    try{
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: { Accept: "application/json, */*",
            "Content-Type": 'application/json'
            },
            body: JSON.stringify({
               'name': trainingProgram.name, 
               'category': trainingProgram.category,
               'description': trainingProgram.description,
               'image': trainingProgram.image
               

            })
        })
        if(!response.ok){
            throw new Error("Could not create exercise with exercise name " + trainingProgram.name)
        } 
        const data = await response.json();
        return [null, data]
    }
    catch(error) {
        return [error.message, []]
    }
}

function AddWorkoutsToProgram(id, listOfIds) {
    const addWorkoutsToProgram = async () => {

        const requestOptions = {
            method: "PUT",
            headers: {
                Accept: "application/json, */*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                listOfIds
            ),
        }
        console.log(requestOptions)
        await fetch(`${apiUrl}/${id}`, requestOptions)
    };
    addWorkoutsToProgram();
}

function DeleteTrainingProgram(id) {
    const deleteTrainingProgram = async () => {

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
    deleteTrainingProgram();
}


const programFuncs = {
    FetchTrainingPrograms,
    FetchTrainingProgram,
    FetchWorkoutsInProgram,
    CreateTrainingProgram,
    AddWorkoutsToProgram,
    DeleteTrainingProgram
}

export default programFuncs