import { useCallback, useState } from "react";
import { Navigate } from "react-router";
import FetchAccountDetails from "../helpers/LoginHelper";
import { CircularProgress, Grid } from "@mui/material";
import { useEffect } from "react";


const HandleLogin = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || [])
    FetchAccountDetails();

    useEffect(() => {
        const value = JSON.parse(localStorage.getItem('user'));
        setUser(value);
    }, [])

    if (!user) {
        return <>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '80vh' }}
            >
                <CircularProgress />
            </Grid>
        </>
    }
    if (user)
        return (
            <>
                <Navigate to="/dashboard" />
            </>
        )
}
export default HandleLogin;