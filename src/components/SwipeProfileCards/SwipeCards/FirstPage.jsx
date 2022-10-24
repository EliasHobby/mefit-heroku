import { Box, Typography } from "@mui/material";

export default function FirstPage() {

    return (
        <>
            <Box sx={{ height: 255, width: 440, p: 2, textalign:'center', display:'flex', alignItems:'center' }}>
                <Typography variant="h6">Before you begin using this site, we need to know a few things about you.</Typography>
            </Box>
        </>
    )
}