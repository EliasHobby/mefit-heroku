import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ProgramCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://www.girlsgonestrong.com/wp-content/uploads/2021/05/Push-UpFeelImpossible_FeaturedImage-1024x536.jpg"
        alt="Pushups"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Push-up
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Push-ups are a basic exercise used in civilian athletic training or physical education and commonly in military physical training.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Goal</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}