import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const programs = [
  {
    name: 'Get Fit in One Month with Arnold Swarzchszenegger',
    description: 'Join Arnold on a one month journey to peak athletisism. This program focuses on weightlifting and steroids.',
    img: 'https://image-cdn.essentiallysports.com/wp-content/uploads/arnold-schwarzenegger.jpg'
  },
  {
    name: 'Go Crazy with Kari Jaquesson',
    description: 'Did the Covid-vaccine make you autistic? Do you radiate 5G wherever you go? Join Kari in her Aerobic workout to shake it all off.',
    img: 'https://images.dn.no/image/TlZQUVVmOGR5ZDlKL1ZmUWhSK0F0UCtXdXNLaHQxNERRM255czk3cEpkYz0=/nhst/binary/5c26263260ad5601924b073e455e3f1e?image_version=720'
  },
  {
    name: 'No shortcuts with bigboy Zyzz',
    description: 'No Bitches? No money? Zyzz got you bro. Join my all natural body building program and get ripped - FAST',
    img: 'https://melmagazine.com/wp-content/uploads/2022/04/Zyzz.jpg' 
  },
  

]

export default function ProgramCard() {
  return (
    <>
      {programs.map((exercise, i) => (
        <Card key={i} sx={{ maxWidth: 345 }}>
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
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </>
  );
}