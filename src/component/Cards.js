import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function Cards() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component={"img"}
          height={"140"}
          image="https://plus.unsplash.com/premium_photo-1714051661316-4432704b02f8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="test image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component={"div"}>
            Web Design
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab enim
            maxime, dolorum libero commodi excepturi repudiandae consequuntur
            aperiam hic recusandae.
          </Typography>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary" onClick={()=>setOpen(true)}>
              Delete
            </Button>
          </CardActions>
        </CardContent>
      </Card>
      <Dialog open={open} onClose={()=>setOpen(false)}>
        <DialogTitle>Are You Sure</DialogTitle>
        <DialogContent>
          <DialogContentText>
            are you sure to delete this products?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>setOpen(false)}>Cancel</Button>
          <Button onClick={()=>setOpen(false)}>Delete</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Cards;
