import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const exercises = [
  {
    name: 'Push-up',
    description: 'Push-ups are a basic exercise used in civilian athletic training or physical education and commonly in military physical training.',
    img: 'https://i.ndtvimg.com/i/2016-06/pushups-625_625x350_51465978240.jpg'
  },
  {
    name: 'Squat',
    description: 'Squats are considered a vital exercise for increasing the strength and size of the lower body muscles as well as developing core strength.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Abdominal_Exercise_Training.jpg/1920px-Abdominal_Exercise_Training.jpg'
  },
  {
    name: 'Sit-up',
    description: 'The sit-up is an abdominal endurance training exercise to strengthen, tighten and tone the abdominal muscles.',
    img: 'https://parade.com/.image/t_share/MTkwNTc4MTU3NDQwMzQ1MjEz/woman-doing-squats-ftr.jpg'
  },
  {
    name: 'Pull-up',
    description: 'Pull-ups build up several muscles of the upper body, including the latissimus dorsi, trapezius, and biceps brachii. A pull-up may be performed with overhand (pronated), underhand (supinated), neutral, or rotating hand position.',
    img: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/12/pull-up-pullup-gym-1296x728-header-1296x728.jpg?w=1155&h=1528'
  },
  
]

export default function ProgramCard() {
  return (
    <>
      {exercises.map((exercise) => (
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            height="140"
            image={exercise.img}
            alt={exercise.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {exercise.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {exercise.description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Add to Goal</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}