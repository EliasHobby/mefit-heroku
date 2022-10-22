import '../App.css';
import ContributorCard from "../components/DisplayCard/ContributorCard";
import { Grid} from "@mui/material";
import ContributorCardDelete from '../components/DisplayCard/ContributorCardDeletes';

const Contributorpage = () => {

    const exerciseimg = "images/ExerciseImg.jpg"
    const workoutimg = "images/WorkoutImg.jpg"
    const trainingProgramimg = "images/TrainingprogramImg.jpg"

    return (
        <>
            <h1>Contributors</h1>

            <Grid container spacing={2} >

                
                    <Grid item xs={4} mb={4} >
                    <ContributorCard img={exerciseimg} title="Exercise" />
                    </Grid>
                    <Grid item xs={4} mb={4} >
                    <ContributorCard img={workoutimg} title="Workout" />
                    </Grid>
                    <Grid item xs={4} mb={4} >
                    <ContributorCard img={trainingProgramimg} title="TrainingProgram" />
                    </Grid>
                    <Grid item xs={4} mb={4} >
                    <ContributorCardDelete img={exerciseimg} title="Exercise" />
                    </Grid>
                    <Grid item xs={4} mb={4} >
                    <ContributorCardDelete img={workoutimg} title="workout" />
                    </Grid>
                    <Grid item xs={4} mb={4} >
                    <ContributorCardDelete img={trainingProgramimg} title="TrainingProgram" />
                    </Grid>
                
            </Grid>
        </>
    )



    

}
export default Contributorpage;