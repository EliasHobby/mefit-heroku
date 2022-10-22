import { Button, Input, InputLabel, Typography, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import { NavLink } from 'react-router-dom'
import { useState } from "react";
/**
 * 1. register: Add inputs
 * 2. handleSubmit: Bind to form onSubmit
 * 3. formState: Provide errors for current inputs 
 */


function NewProfilePictureForm({stateChanger, handleOpen, ...rest}) {

    const { register, handleSubmit, formState: { errors } } = useForm({});

    // data - Inputs in form with values
    const onSubmit = (data) => {

        // Track state on submission
        let stateNumb = 1;

        // Update localstorage
        let user = JSON.parse(localStorage.getItem("user"));
        user.profilePicture = data.ProfilePicture;
        localStorage.setItem("user", JSON.stringify(user))

        // Patch the user in the database
        const patchUser = async () => {

            const patchRequestOptions = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify({
                    'profilePicture': user.profilePicture
                }),
            }
            // HTTP Patch the user
            fetch("https://apimefit.azurewebsites.net/api/Accounts/" + user.id, patchRequestOptions)
        }
        patchUser();
        if (stateNumb === 1) {
            stateChanger('2');
            stateNumb = 2;
        } else {
            stateChanger('1');
            stateNumb = 1;
        }
        handleOpen(false);
    };

    // username is required and must be at least 3 characters
    return (
        <Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: "space-around", alignItems: 'center' }}>

                        <Input {...register("ProfilePicture", {
                            required: true
                        })} multiline="true" type="text" sx={{ width: 400 }} />
                        <Typography sx={{mb: 2}}>{errors.ProfilePicture?.message}</Typography>
                        <Button variant="contained" type="submit">Continue</Button>
                    </Box>
                </form>
        
        </Box>
    );
}
export default NewProfilePictureForm;
