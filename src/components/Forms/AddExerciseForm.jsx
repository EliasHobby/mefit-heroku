import * as React from 'react';
import Box from '@mui/material/Box';
import {Button} from '@mui/material';

import TextField from '@mui/material/TextField';
import { useState } from 'react';

const AddExerciseForm = () =>  {
  const [exData, setExData] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [target_Muscle_Group, setTargetGroup] = useState("");
  const [imageURL, setImageUrl] = useState("");


  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          onChange = {(event) => setName(event.target.value)}
          id="outlined-required"
          label="Name of exercise"
          value= {name}
        />
        <TextField
          required
          onChange = {(event) => setDescription(event.target.value)}
          id="outlined-required"
          label="Description of exercise"
          value= {description}
        />
        
        <TextField
          required
          onChange = {(event) => setTargetGroup(event.target.value)}
          id="outlined-required"
          label="Target muscle group"
          value= {target_Muscle_Group}

        />
        
        <TextField
          required
          onChange = {(event) => setImageUrl(event.target.value)}
          id="outlined-required"
          label="ImageURL"
          value={imageURL}
        />
        <TextField
          required
          onChange = {(event) => setExData(event.target.value)}
          id="outlined-required"
          label="exData"
          defaultValue={exData}
          value ={exData}
        />
        <Button type="submit" variant="contained"  onClick={() => setExData({exData} + {name} + " , "  + " description: " + {description} + " , " + "target_Muscle_Group: " + {target_Muscle_Group} + " , "  + "imageURL: " + {imageURL} )}>
            Submit Exercise
            </Button>
        </div>
    </Box>
  );
}
export default AddExerciseForm;