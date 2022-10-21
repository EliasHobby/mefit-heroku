import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { Typography, Box } from '@mui/material';

const StyledRating = styled(Rating)(({ theme }) => ({
    '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
        color: theme.palette.action.disabled,
    },
}));

const customIcons = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon color="error" sx={{ fontSize: "5rem" }} />,
        label: 'Very Dissatisfied',
    },
    2: {
        icon: <SentimentDissatisfiedIcon color="error" sx={{ fontSize: "5rem" }} />,
        label: 'Dissatisfied',
    },
    3: {
        icon: <SentimentSatisfiedIcon color="warning" sx={{ fontSize: "5rem" }} />,
        label: 'Neutral',
    },
    4: {
        icon: <SentimentSatisfiedAltIcon color="success" sx={{ fontSize: "5rem" }} />,
        label: 'Satisfied',
    },
    5: {
        icon: <SentimentVerySatisfiedIcon color="success" sx={{ fontSize: "5rem" }} />,
        label: 'Very Satisfied',
    },
};

function IconContainer(props) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
    value: PropTypes.number.isRequired,
};

export default function RadioGroupRating() {
    return (
        <>
            <Box sx={{ height: 255, width: 440, pt: 2, pb: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <StyledRating
                    name="highlight-selected-only"
                    IconContainerComponent={IconContainer}
                    getLabelText={(value) => customIcons[value].label}
                    highlightSelectedOnly
                    sx={{ display: 'flex', justifyContent: 'center', mt: '4rem', mb:'2rem' }}
                />
                <Typography component="legend">How would you rate your current fitness level?</Typography>
            </Box>
        </>
    );
}

