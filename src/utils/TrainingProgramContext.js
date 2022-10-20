import { useEffect, useState } from "react";


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

const programFuncs = {
    FetchTrainingPrograms,
    FetchTrainingProgram,
    FetchWorkoutsInProgram
}

export default programFuncs