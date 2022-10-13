import DisplayCard from "../components/DisplayCard/DisplayCard";
import '../App.css';
import { Exercise, defaultExercise } from "../models/exercise";
import { Grid, Box, Card, Typography} from "@mui/material";
import { blueGrey } from "@mui/material/colors";

import { useKeycloak } from "@react-keycloak/web";




const Exercisepage = () => {
    const thisExercise = new defaultExercise ( 12, "burpees" )
    const { keycloak } = useKeycloak();


    //user name 
    const exerciseCard =     
    <div id= "ExerciseComponent">
    <img src="{thisExercise.getImage}" alt="Exercise pic"></img>
    <Typography variant="h5" id="Exercise-name"> Exercise name:</Typography> {thisExercise.name ? <h3>{thisExercise.name} </h3> : <p>No name set</p>}
    <h2 id="Exercise-description">Description: </h2> {thisExercise.description ? <h3>{thisExercise.description}</h3> : <p>No description</p>}
    <h2 id="Exercise-description">Target muscle group: </h2> {thisExercise.target_muscle_group  ? <h3>{thisExercise.target_muscle_group}</h3> : <p>No target muscle group</p>}

    </div>

    return (
        <Box sx={{ minWidth: 300 , backgroundColor: blueGrey, display: 'inline-block', mx: '5px', transform: 'scale(1)' }}>
        <Card variant="outlined" >{exerciseCard}</Card>
        </Box>
    )
}
export default Exercisepage;