import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { NavLink } from 'react-router-dom';

const ContributorCard = ({img, title}) => {



  return (
    <Card sx={{ maxWidth: 360, maxHeight: 360 }}>
        <CardActionArea component={NavLink} to={{ pathname: `/Contributors/${title}` }}>
            <CardMedia
                component="img"
                height="180"
                image = {img}
                alt={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Add a new {title} 
        </Typography>
        <Typography variant="body2" color="text.secondary"sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '3',
              WebkitBoxOrient: 'vertical',
            }}>
          Here you can create {title} and edit {title}
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default ContributorCard