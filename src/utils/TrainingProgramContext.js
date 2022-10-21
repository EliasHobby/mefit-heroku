import { useEffect, useState } from "react";

const apiUrl = "https://mefitapi.azure-api.net/api/TrainingPrograms"

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

const CreateTrainingProgram = async (trainingprogram) => {
    try{
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: { Accept: "application/json, */*",
            "Content-Type": 'application/json'
            },
            body: JSON.stringify({
               Name: trainingprogram.Name, 
               Categoty: trainingprogram.Categoty,
               Description: trainingprogram.Description,
               Image: trainingprogram.Image
               

            })
        })
        if(!response.ok){
            throw new Error("Could not create exercise with exercise name " + trainingprogram)
        } 
        const data = await response.json();
        return [null, data]
    }
    catch(error) {
        return [error.message, []]
    }
}

const programFuncs = {
    FetchTrainingPrograms,
    FetchTrainingProgram,
    FetchWorkoutsInProgram,
    CreateTrainingProgram
}

export default programFuncs