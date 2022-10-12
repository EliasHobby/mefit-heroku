import { Box, Card, Button } from "@mui/material"
import { useContext } from "react"
import { UserContext } from "../UserContext"
import {User} from "../models/user"
import { blueGrey } from "@mui/material/colors"


import { Typography } from "@mui/material";
import { useKeycloak } from "@react-keycloak/web";

const Profile = () => {
    //User context provider to set current user
    //const userContext = useContext(UserContext)
    //const user = userContext.getUser()
    const user = new User ()
  

    //Handlers
    //function to uodate weigjt history
    function handleWeightUpdate() {
        console.log("Updating user weight")
        user.setWeight()
        }

    
    function handleHeightUpdate() {
        console.log("Updating user Height")
        user.setWeight()
        }    
    function handlEmailUpdate() {
        console.log("Updating user Email")
        user.
        }    

    //User details card
    const fitDeetails =   
    <div>
        <h3 id = "height">height: {user.getHeight()}</h3>
        <Button variant="contained" id = "updateHeight" onClick={handleHeightUpdate}>update weight</Button>
        <h3 id = "weight">weight: {user.getWeight()}</h3>
        <Button variant="contained" id = "updateweight" onClick={handleWeightUpdate}>update weight</Button>
        <h3 id = "email">email: {user.getEmail()}</h3>
        <h3 id = "disabilities">height: {user.getDisabilities()}</h3>
    </div>



    //user name 
    const userCard =     
    <div id= "user-component">
    <h2 id="Title">User:</h2>
    {user.username ? <h3>{user.getFirstName()}</h3> : <p>No user logged in</p>}
    <Box id= "heightWeight" sx={{ backgroundColor: blueGrey, display: 'inline-block', mx: '5px', transform: 'scale(1)' }}>
        <Card variant="outlined" >{fitDeetails}</Card>
        </Box>
    </div>

    return (
        <>
            <Box sx={{ minWidth: 300 }}>
        <Card variant="outlined" >{userCard}</Card>
        </Box>
            <Typography variant="h5">Hi {keycloak.tokenParsed.name} the {keycloak.tokenParsed.roles[0]}.</Typography>
        </>
    )
}


export default Profile;