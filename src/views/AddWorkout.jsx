import AddWorkoutForm from "../components/Forms/AddWorkoutForm";
import { Button, Card, CardContent } from "@mui/material";
const AddWorkout = () => {


      
    return (
        <>
        <Card sx={{minWidth:200, maxWidth: 300}}>
            <CardContent >
            <h1>Add A Workout Page</h1>
                <AddWorkoutForm></AddWorkoutForm>
            </CardContent>
        </Card>
        </>
    )
}
export default AddWorkout;