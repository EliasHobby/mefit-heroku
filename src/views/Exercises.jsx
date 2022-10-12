import DisplayCard from "../components/DisplayCard/DisplayCard";
import '../App.css';
import { Grid } from "@mui/material";

const Exercises = () => {

    const exercises = [
        {
            name: 'Push-up',
            description: 'Push-ups are a basic exercise used in civilian athletic training or physical education and commonly in military physical training.',
            img: 'https://i.ndtvimg.com/i/2016-06/pushups-625_625x350_51465978240.jpg'
        },
        {
            name: 'Squat',
            description: 'Squats are considered a vital exercise for increasing the strength and size of the lower body muscles as well as developing core strength.',
            img: 'https://parade.com/.image/t_share/MTkwNTc4MTU3NDQwMzQ1MjEz/woman-doing-squats-ftr.jpg'
        },
        {
            name: 'Sit-up',
            description: 'The sit-up is an abdominal endurance training exercise to strengthen, tighten and tone the abdominal muscles.',
            img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Abdominal_Exercise_Training.jpg/1920px-Abdominal_Exercise_Training.jpg'
        },
        {
            name: 'Pull-up',
            description: 'Pull-ups build up several muscles of the upper body, including the latissimus dorsi, trapezius, and biceps brachii. A pull-up may be performed with overhand (pronated), underhand (supinated), neutral, or rotating hand position.',
            img: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2019/12/pull-up-pullup-gym-1296x728-header-1296x728.jpg?w=1155&h=1528'
        },

    ]

    return (
        <>
            <h1>Exercises</h1>
            <Grid container spacing={2}>

                {exercises.map((exercise) => (
                    <Grid item xs={3}>
                        <DisplayCard exercise={exercise} />
                    </Grid>
                ))}

            </Grid>
        </>
    )
}
export default Exercises;