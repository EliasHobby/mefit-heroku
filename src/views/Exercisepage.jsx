import DisplayCard from "../components/DisplayCard/DisplayCard";
import '../App.css';
import { Exercise, defaultExercise } from "../models/exercise";
import { Grid, Box, Card, Typography, blueGrey } from "@mui/material";
import { useKeycloak } from "@react-keycloak/web";

const Exercisepage = () => {
    const thisExercise = new defaultExercise ( 12, "burpees" )
    const { keycloak } = useKeycloak();


    //user name 
    const exerciseCard =     
    <div id= "ExerciseComponent">
    <Typography variant="h5" id="Title">Exercise name:</Typography> {thisExercise.getName ? <h3>{thisExercise.getName} </h3> : <p>No description</p>}
    <h2 id="Title">Role:</h2> {keycloak.tokenParsed.roles[0] ? <h3>{keycloak.tokenParsed.roles[0]}</h3> : <p>No</p>}


    </div>
    return (
        <Box sx={{ minWidth: 300 , backgroundColor: blueGrey, display: 'inline-block', mx: '5px', transform: 'scale(1)' }}>
        <Card variant="outlined" >{exerciseCard}</Card>
        </Box>
    )
    
}
export default Exercisepage;