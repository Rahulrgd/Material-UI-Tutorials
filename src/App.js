import {
  Button,
  TextField,
  Typography,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
} from "@mui/material";
import Form from "./component/Form";
import { useState } from "react";
// import Cards from "./component/Cards";
import Models from "./component/Models";
import Containers from "./component/Containers";
import ListComponents from "./component/ListComponents";
import Accord from "./component/Accord";
import DrawerMenu from "./component/DrawerMenu";
import BasicTable from "./component/BasicTable";
import Grids from "./component/Grids";

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
        {/* <Cards/> */}
        {/* <Models/> */}
        {/* <Containers/> */}
        {/* <ListComponents/> */}
        {/* <Accord/> */}
        {/* <DrawerMenu/> */}
        <BasicTable/>
        <Grids/>
      </div>
    </div>
  );
}

export default App;
