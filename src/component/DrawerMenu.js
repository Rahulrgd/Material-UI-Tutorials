import {
    Alert,
  Button,
  CircularProgress,
  Drawer,
  LinearProgress,
  List,
  ListItemButton,
  ListItemText,
  Snackbar,
} from "@mui/material";
import React, { useState } from "react";

function DrawerMenu() {
  const [open, setOpen] = useState(false);
  const courses = ["react", "nodejs", "mern", "java", "Spring boot"];
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
      <CircularProgress color="secondary"  value={75} />
      <br />
      <LinearProgress/>
    </div>
  );
}

export default DrawerMenu;
