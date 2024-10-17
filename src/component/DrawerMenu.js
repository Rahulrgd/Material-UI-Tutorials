import {
  IconButton,
  Alert,
  Button,
  CircularProgress,
  Drawer,
  LinearProgress,
  List,
  ListItemButton,
  ListItemText,
  Rating,
  Snackbar,
  Typography,
} from "@mui/material";
import AddReactionIcon from "@mui/icons-material/AddReaction";
import React, { useState } from "react";

function DrawerMenu() {
  const [open, setOpen] = useState(false);
  const courses = ["react", "nodejs", "mern", "java", "Spring boot"];
  const [value, setValue] = useState();
  return (
    <div>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open
      </Button>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          {courses.map((course) => {
            return (
              <ListItemButton onClick={() => setOpen(false)}>
                <ListItemText primary={course} />
              </ListItemButton>
            );
          })}
        </List>
      </Drawer>
      <br />
      <Snackbar open={true} message="This is Snackbar" autoHideDuration={2000}>
        <Alert severity="success">This is Alert in Snackbar</Alert>
      </Snackbar>
      <br />
      <CircularProgress color="secondary" value={75} />
      <br />
      <LinearProgress />
      <Rating
        value={value}
        onChange={(e, val) => setValue(val)}
        size="large"
        precision={0.5}
      />
      <Typography>Rated {value !== undefined ? value : 0} stars</Typography>
      <br />
      <IconButton onClick={()=>alert("Icon BTN")}>
        <AddReactionIcon color="secondary"/>
      </IconButton>
    </div>
  );
}

export default DrawerMenu;
