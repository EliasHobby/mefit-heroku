import AddExerciseForm from "../components/Forms/AddExerciseForm";
import { Button, Card, CardContent } from "@mui/material";

const AddExercise = () => {

    let exData = {
                "name": "alan", 
                "description": "",
                "target_Muscle_Group": "",
                "image": ""
            }

    function handleAddExercise() {
    
        // Send data to the backend via POST
        fetch('https://apimefit.azurewebsites.net/api/exercises', {  // Enter your IP address here
    
          method: 'POST', 
          mode: 'cors', 
          body: JSON.stringify(exData) // body data type must match "Content-Type" header
    
        })
      }


    return (
        <>
        <Card sx={{minWidth:200, maxWidth: 300}}>
            <CardContent >
            <h1>Add An Exercise Page</h1>
            <AddExerciseForm> 
            </AddExerciseForm>      

            </CardContent>
        </Card>
        </>
    )
}
export default AddExercise;