import { useEffect, useState } from "react";

const FetchExercises = () => {

    
    const [data, setData] = useState()
    
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

return data;

}


export default FetchExercises;