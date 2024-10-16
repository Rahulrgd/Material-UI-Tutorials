import {
  Button,
  TextField,
  Typography,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
} from "@mui/material";
import logo from "./logo.svg";
import Form from "./component/Form";
import { useState } from "react";
import Cards from "./component/Cards";

function App() {
  const [values, setValues] = useState(0);

  return (
    <div>
      {/* <Form/> */}
      <AppBar>
        <Toolbar>
          <Typography variant="h5">LOGO</Typography>
          <Tabs
            sx={{ marginLeft: "auto" }}
            value={values}
            onChange={(e,val)=>setValues(val)}
            textColor="inherit"
            indicatorColor="secondary"
          >
            <Tab label="Home" />
            <Tab label="About" />
            <Tab label="Contact" />
          </Tabs>
        </Toolbar>
      </AppBar>
      <div style={{marginTop:100}}>
        <Cards/>
      </div>
    </div>
  );
}

export default App;
