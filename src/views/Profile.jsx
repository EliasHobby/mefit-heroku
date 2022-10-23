import { Box, Typography, Button, Card } from "@mui/material";
import { useKeycloak } from "@react-keycloak/web";
import UpdateProfilePictureModal from "../components/UpdateProfilePictureModal/UpdateProfilePictureModal";
import { useState } from "react";
import UpdateMeasurementsModal from "../components/UpdateMeasurementsModal/UpdateMeasurementsModal";

const Profile = () => {
    const { keycloak } = useKeycloak();
    const [state, setState] = useState('');
    const user = JSON.parse(localStorage.getItem("user"));
    let profilePictureUrl;
    if (user.profilePicture) {
        profilePictureUrl = user.profilePicture;
    } else {
        profilePictureUrl = "https://i.pinimg.com/736x/3d/cd/4a/3dcd4af5bc9e06d36305984730ab7888.jpg"
    }

    const handleLogout = () => {
        localStorage.clear();
        keycloak.logout();
    }

    const contributorRequest = () => {
        localStorage.setItem("Request", JSON.stringify(user.id))
    }

    const userData = localStorage.getItem(user)
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h1>Profile</h1>
                <Button variant="contained" sx={{ height: 40 }} onClick={() => handleLogout()}>Log out</Button>
            </Box>
            <Card sx={{ pl: 5, pr: 10, pt: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', p: 2, width: '100%', mb: 3 }}>
                        <Box sx={{ pb: 2, borderBottom: 1, borderColor: '#1976d2' }}>
                            <Typography variant="h3">{user.firstname} {user.lastname}</Typography>
                            <Typography variant="h5" color="gray">{user.email}</Typography>
                        </Box>
                        <Box sx={{ mt: 5, height: 220, mb: 4, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                                <Typography variant="h4" sx={{ mb: 'auto', mt: 2 }}>
                                    Measurements
                                </Typography>
                                <UpdateMeasurementsModal updateState={setState} />
                            </Box>
                            <Box sx={{ mb: 1 }}>
                                <Typography variant="h5">
                                    Height
                                </Typography>
                                <Typography variant="h6">{user.height} cm</Typography>
                            </Box>
                            <Box>
                                <Typography variant="h5">
                                    Weight
                                </Typography>
                                <Typography variant="h6">{user.weight} kg</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', ml: 5 }}>
                        <img src={profilePictureUrl} alt="userpicture" style={{ width: 350, height: 350, borderRadius: 360, objectFit: 'cover' }} />
                        <UpdateProfilePictureModal updateState={setState} />
                    </Box>
                </Box>
                <Box mb={5}>
                <Button variant="contained" sx={{ height: 40 }} onClick={() => contributorRequest()}>Send a request to be a Contributor</Button>
                </Box>
            </Card>
        </>
    )
}
export default Profile;