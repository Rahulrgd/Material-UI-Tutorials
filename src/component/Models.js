import { Box, Button, Link, Modal, Typography } from "@mui/material";
import React, { useState } from "react";

function Models() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Model</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box position="absolute" top="50%" left="50%">
          <Typography>This Is Model</Typography>
          <Button variant="contained" onClick={() => setOpen(false)}>
            cancel
          </Button>
        </Box>
      </Modal>
      <br />
      <Link
        variant="h4"
        color="secondary"
        href="https://www.google.com"
        underline="hover"
      >
        Nav Link
      </Link>
    </div>
  );
}

export default Models;
