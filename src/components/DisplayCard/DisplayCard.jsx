import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { NavLink } from 'react-router-dom';


const DisplayCard = ({ element, type, id }) => {

  return (
    <>
      <Card sx={{ maxWidth: 360, maxHeight: 360 }}>
        <CardActionArea component={NavLink} to={{ pathname: `/${type}/${id + 1}` }}>
          <CardMedia
            component="img"
            height="180"
            image={element.image}
            alt={element.name}
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {element.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: '3',
              WebkitBoxOrient: 'vertical',
            }}>
              {element.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}
export default DisplayCard;