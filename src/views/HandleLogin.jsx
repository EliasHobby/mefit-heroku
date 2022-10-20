import { Navigate } from "react-router";
import FetchAccountDetails from "../helpers/LoginHelper";


const HandleLogin = () => {

    FetchAccountDetails();
    return (
        <>
            <Navigate to="/dashboard" />
        </>
    )
}
export default HandleLogin;