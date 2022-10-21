import { Button, Input, InputLabel, Typography, Box, } from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup";
import { NavLink } from 'react-router-dom'
/**
 * 1. register: Add inputs
 * 2. handleSubmit: Bind to form onSubmit
 * 3. formState: Provide errors for current inputs 
 */



// Input validation
const schema = yup.object({
    Height: yup.number().positive().integer().required().typeError("Please provide a valid height."),
    Weight: yup.number().positive().integer().required().typeError("Please provide a valid weight.")
}).required();

function NewProfileForm() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    });


    // data - Inputs in form with values
    const onSubmit = (data) => {

        // Update localstorage
        let user = JSON.parse(localStorage.getItem("user"));
        user.height = data.Height;
        user.weight = data.Weight;
        localStorage.setItem("user", JSON.stringify(user))

        // Patch the user in the database
        const patchUser = async () => {

            const patchRequestOptions = {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify({
                    'weight': user.weight,
                    'height': user.height
                }),
            }
            // HTTP Patch the user
            fetch("https://apimefit.azurewebsites.net/api/Accounts/" + user.id, patchRequestOptions)
        }
        patchUser();
    };

    // username is required and must be at least 3 characters
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box sx={{ display: 'flex', height: '15rem', flexDirection: 'column', justifyContent: "space-around", alignItems: 'center' }}>

                <InputLabel>Height (cm)</InputLabel>
                <Input {...register("Height", {
                    required: true,
                    min: 1, max: 300
                })} type="text" sx={{ width: 100 }} />
                <Typography>{errors.Height?.message}</Typography>

                <InputLabel>Weight (kg)</InputLabel>
                <Input {...register("Weight", {
                    required: true,
                    min: 1, max: 300
                })} type="text" sx={{ width: 100 }} />
                <Typography>{errors.Weight?.message}</Typography>
                <NavLink to={"/profile"}>
                    <Button variant="contained" type="submit">Continue</Button>
                </NavLink>
            </Box>
        </form>
    );
}

export default NewProfileForm;
