import DisplayCard from "../components/DisplayCard/DisplayCard";
import '../App.css';
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";


const Exercises = () => {


    const [data, setData] = useState({})
    const oo = [
        {
            image: 'https://w0.peakpx.com/wallpaper/346/646/HD-wallpaper-funny-frog-frog-cool-funny.jpg',
            name: 'im freg',
            description: 'ribbit'
        }
    ]

    useEffect(() => {
        const fetchExercises = async () => {
            fetch("https://mefitapi.azure-api.net/api/Exercises")
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
        fetchExercises();
    }, [])

    return (
        <>
            <h1>Exercises</h1>
            <Grid container spacing={2} >

                {oo.map((exercise, index) => (
                    <Grid item xs={4} mb={4} key={index} >
                        <DisplayCard exercise={exercise} />
                    </Grid>
                ))}
            </Grid>
        </>
    )
}

export default Exercises;