import {TrainingProgram} from "../models/trainingProgram"


async function fetchTrainingProgram() {
    try {
        //placeholder url (assumed to be right)
        const response = await fetch("https://mefitapi.azure-api.net/api/trainingprogram")
        const jsonPrograms = await response.json()
        return jsonPrograms
    }
    catch (error) {
        console.error("Error: ", error.message)
    }
}



// Return a list of Goals to be fetched to goals page 
export const listOfPrograms =  (async () =>{

    // Variables
    const programs = fetchTrainingProgram()
    let list = []

    for (const program in programs) {
        let thisProgram = new TrainingProgram(program.trainingProgramId , program.name, program.Category, program.Description, program.image ) 
        list.push(thisProgram)

    }
    console.log(list)
    return list
})()


export default listOfPrograms;