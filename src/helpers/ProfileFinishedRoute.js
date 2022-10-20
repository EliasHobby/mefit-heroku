import { Navigate } from "react-router-dom";

const ProfileFinishedRoute = ({ children }) => {

    let profileIsFinished = true;
    let user = JSON.parse(localStorage.getItem("user"))

    if (user.weight === null) {
        profileIsFinished = false;
    }

    return profileIsFinished ? children : <Navigate to="/updateprofile" />
}

export default ProfileFinishedRoute