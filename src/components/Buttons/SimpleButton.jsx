import { Box, Button, Card, CardContent } from "@mui/material";
import { NavLink } from 'react-router-dom';

const SimpleButton = ({ name, url }) => {

return (
    <>
        <Box>
            <NavLink to={url}>
            <Button
             variant="contained" >{name}</Button>
            </NavLink>
        </Box>
    </>
)
}
export default SimpleButton;