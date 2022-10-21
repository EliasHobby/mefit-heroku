import { Box, Typography } from "@mui/material";
import NewProfileForm from "../../ProfileForm/NewProfileForm";

export default function ThirdPage() {

    return (
        <>
            <Box sx={{ height: 255, width: 440, pt: 2, pb: 2 }}>
                <NewProfileForm />
            </Box>
        </>
    )
}