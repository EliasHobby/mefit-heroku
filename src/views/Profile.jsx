import { Typography } from "@mui/material";
import { useKeycloak } from "@react-keycloak/web";
import { useEffect } from "react";
import { useState } from "react";

const Profile = () => {
    const { keycloak } = useKeycloak();

    const [user, setUser] = useState({})
    const [data, setData] = useState({})

    useEffect(() => {
        const fetchUser = async () => {
            fetch("https://randomuser.me/api")
                .then(response => {
                    if (response.ok) {
                        console.log(response)
                        return response.json()
                    }
                })
                .then(data => {
                    console.log(data);
                    const dataResults = data.results[0];
                    const _userData = {
                        username: dataResults.login.username,
                        country: dataResults.location.country,
                        name: `${dataResults.name.title}. ${dataResults.name.first} ${dataResults.name.last}`,
                        picture: dataResults.picture.large
                    }
                    setData(_userData)
                })
                .catch(error => {
                    console.error(error.message)
                })
        }
        fetchUser();
    }, [])

    const userData = localStorage.getItem(user)
    return (
        <>
            <h1>Profile for {userData.firstname}</h1>
            <img src={data.picture} alt="profile" />
            <Typography variant="h5">Hi {data.name} from {data.country}.</Typography>
        </>
    )
}
export default Profile;