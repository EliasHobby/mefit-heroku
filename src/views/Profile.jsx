import { Box, Card, Button } from "@mui/material"
// import { useContext } from "react"
// import { UserContext } from "../UserContext"
import {User} from "../models/user"
import { blueGrey } from "@mui/material/colors"


import { Typography } from "@mui/material";
import { useKeycloak } from "@react-keycloak/web";


const Profile = () => {
    //User context provider to set current user
    //const userContext = useContext(UserContext)
    //const user = userContext.getUser()
    const user = new User ("Robin", "Hextall", "Robinh-s@hottymail.com" )
  
    const { keycloak } = useKeycloak();

    // //Handlers
    // //function to uodate weigjt history
    // function handleWeightUpdate() {
    //     console.log("Updating user weight")
    //     user.setWeight()
    //     }

    
    // function handleHeightUpdate() {
    //     console.log("Updating user Height")
    //     user.setWeight()
    //     }    
    // function handlEmailUpdate() {
    //     console.log("Updating user Email")
    //     }    

    // User details card
     const fitDeetails =   
     <div>
         <h3 id = "height">height:</h3> {user.getHeight ? <h3>{user.getHeight} </h3> : <p>No user logged in</p>}
         {/* <h3 id = "weight">weight: {user.getWeight()}</h3>
         <h3 id = "email">email: {user.getEmail()}</h3>
         <h3 id = "disabilities">disabilities: {user.getDisabilities()}</h3> */}
    </div>



    //user name 
    const userCard =     
    <div id= "user-component">
    <Typography variant="h5" id="Title">User:</Typography> {keycloak.tokenParsed.name ? <h3>{keycloak.tokenParsed.name} </h3> : <p>No user logged in</p>}
    <h2 id="Title">Role:</h2> {keycloak.tokenParsed.roles[0] ? <h3>{keycloak.tokenParsed.roles[0]}</h3> : <p>No</p>}

    <Box id= "heightWeight" sx={{ backgroundColor: blueGrey, display: 'inline-block', mx: '5px', transform: 'scale(1)' }}>
        <Card variant="outlined" >{fitDeetails}</Card> 
        </Box>
    </div>

    return (
        <Box sx={{ minWidth: 300 }}>
        <Card variant="outlined" >{userCard}</Card>
        </Box>
    )
}


export default Profile;