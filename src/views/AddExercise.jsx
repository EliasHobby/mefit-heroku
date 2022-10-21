import AddExerciseForm from "../components/Forms/AddExerciseForm";
import { Button, Card, CardContent } from "@mui/material";

const AddExercise = () => {



    
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