import { Button, TextField, Typography } from "@mui/material";
import logo from "./logo.svg";

function App() {
  return (
    <div>
      {/* Learning about typography */}
      <Typography variant="h1" component={"h1"} sx={{ color: "red" }}>
        Typorgraphy YT
      </Typography>
      <h1>Meterial UI Tutorial</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit, sint.
      </p>
      {/* Button Tutorial */}
      <Button variant="contained" color="success" sx={{margin: "10"}}>Click Me</Button>
      <Button variant="text" onClick={()=>alert("You Clicked")}>Click Me</Button>
      <Button variant="outline" size="large">Click Me</Button>

      {/* Text Filed Tutorial */}
      <br />
      <br />
      <TextField type="text" placeholder="name" variant="standard" sx={{margin:"30px"}}/>
      <TextField type="text" placeholder="name" variant="outlined" sx={{margin:"30px"}}/>
      <TextField type="text" placeholder="name" variant="filled" sx={{margin:"30px"}}/>
    </div>
  );
}

export default App;
