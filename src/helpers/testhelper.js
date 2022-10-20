import { useKeycloak } from "@react-keycloak/web";

const PostWorkout = async () => {
    const { keycloak } = useKeycloak();
    try {
        const response = await fetch("https://apimefit.azurewebsites.net/api/workouts", {
            method: "POST",
            headers: {
                Accept: "application/json, */*",
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                "name": "TESTPOST",
                "type": "Strength",
                "image": '',
                "day": '',
                "exerciseId": [0]
            }),
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error)
    }
}


export default PostWorkout;