import AddProgramForm from "../components/Forms/AddProgramForm";
import { Button, Card, CardContent } from "@mui/material";

const AddProgram = () => {


      
    return (
        <>
        <Card sx={{minWidth:200, maxWidth: 300}}>
            <CardContent >
            <h1>Add A TrainingProgram</h1>
            <AddProgramForm></AddProgramForm>      
            </CardContent>
        </Card>
        </>
    )
}
export default AddProgram;