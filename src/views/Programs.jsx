import DisplayCard from "../components/DisplayCard/DisplayCard";
import '../App.css';
import { Grid } from "@mui/material";

const Programs = () => {
    
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

    return (
        <>
            <h1>Exercises</h1>
            <Grid container spacing={2}>

                {programs.map((program, index) => (
                    <Grid item xs={4} key={index}>
                        <DisplayCard exercise={program} />
                    </Grid>
                ))}

            </Grid>
        </>
    )
}
export default Programs;