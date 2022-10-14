import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const DisplayCard = ({ exercise }) => {
  return (
    <>
      <Card sx={{ maxWidth: 360, maxHeight: 360 }}>

        <CardMedia
          component="img"
          height="180"
          image={exercise.image}
          alt={exercise.name}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {exercise.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: '3',
            WebkitBoxOrient: 'vertical',
          }}>
            {exercise.description}
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>

      </Card>
    </>
  );
}
export default DisplayCard;