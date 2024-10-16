import { Button, TextField, Typography, AppBar, Toolbar } from "@mui/material";
import logo from "./logo.svg";
import Form from "./component/Form";

function App() {
  return (
    <div>
      {/* <Form/> */}
      <AppBar>
        <Toolbar>
          <Typography variant="h5">LOGO</Typography>
          <Button variant="contained" color="success" sx={{marginLeft:"10px"}}>
            SignIN
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
