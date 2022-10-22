import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Input } from '@mui/material';
import { Form } from 'react-router-dom';
import NewProfilePictureForm from '../ProfileForm/NewProfilePictureForm';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function UpdateProfilePictureModal({updateState, ...rest}) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [state, setState] = React.useState('');
    const passState = () => {
        updateState(state);
    }
    passState();
    return (
        <div>
            <Button onClick={handleOpen}>Edit Profile Picture</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Enter a valid picture URL
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt:'2rem' }}>
                        <NewProfilePictureForm stateChanger={setState} handleOpen={setOpen}/>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
