import {
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
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
    </div>
  );
}

export default DrawerMenu;
