import { List, ListItem, Checkbox, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";

const WorkoutListItem = ({ arr }) => {
    const [checked, setChecked] = useState([1]);

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        setChecked(newChecked);
    };

    return (
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {arr.map((value) => {
                const labelId = `checkbox-list-secondary-label-${value}`;
                return (
                    <ListItem
                        key={value}
                        secondaryAction={
                            <Checkbox
                                edge="end"
                                onChange={handleToggle(value)}
                                checked={checked.indexOf(value) !== -1}
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        }
                        disablePadding
                    >
                        <ListItemButton>
                            <ListItemText id={labelId} primary={value.name} />
                        </ListItemButton>
                    </ListItem>
                )
            })}
        </List>
    );

}

export default WorkoutListItem