import AddExerciseForm from "../components/Forms/AddExerciseForm";
import { Button, Card, CardContent } from "@mui/material";

// View component for adding a new exercise. 
const AddExercise = () => {



    //Displays card and form for user to add an exercise.
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