import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Input } from '@mui/material';
import { Form } from 'react-router-dom';
import NewProfilePictureForm from '../ProfileForm/NewProfilePictureForm';
import EditIcon from '@mui/icons-material/Edit';
import NewProfileForm from '../ProfileForm/NewProfileForm';
import NewMeasurementsForm from '../ProfileForm/NewMeasurementsForms';

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

export default function UpdateMeasurementsModal({updateState, ...rest}) {
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
            <IconButton onClick={handleOpen}><EditIcon></EditIcon></IconButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Update your measurements
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt:'2rem' }}>
                        <NewMeasurementsForm stateChanger={setState} handleOpen={setOpen} />
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
