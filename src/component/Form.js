import { CheckBox } from "@mui/icons-material";
import {
  Button,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import React, { useState } from "react";

function Form() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
    courses: "",
    gender: "",
  });

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: [e.target.value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <TextField
          placeholder="name"
          value={inputs.name}
          onChange={handleChange}
          name="name"
          type="text"
          variant="outlined"
          sx={{ margin: "10px" }}
        />
        <TextField
          placeholder="email"
          value={inputs.email}
          onChange={handleChange}
          name="email"
          type="email"
          variant="outlined"
          sx={{ margin: "10px" }}
        />
        <TextField
          placeholder="password"
          value={inputs.password}
          onChange={handleChange}
          name="password"
          type="password"
          variant="outlined"
          sx={{ margin: "10px" }}
        />
        <br />
        <FormGroup sx={{ margin: "10px" }}>
          <FormControlLabel
            label="I Agree T&C"
            control={<CheckBox />}
            onChange={() => {
              setInputs((prevState) => ({
                ...prevState,
                terms: !inputs.terms,
              }));
            }}
          />
        </FormGroup>
        <br />
        <FormControl fullWidth>
          <InputLabel id="menu">Courses</InputLabel>
          <Select
            labelId="menu"
            id="menu-list"
            label="courses"
            value={inputs.courses}
            onChange={handleChange}
            name="courses"
          >
            <MenuItem value={"mongodb"}>Mongodb</MenuItem>
            <MenuItem value={"express"}>Express</MenuItem>
            <MenuItem value={"node"}>Node</MenuItem>
            <MenuItem value={"react"}>React</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Gender</FormLabel>
          <RadioGroup
            name="gender"
            onChange={handleChange}
          >
            <FormControlLabel value={"male"} label="Male" control={<Radio />} />
            <FormControlLabel
              value={"female"}
              label="Female"
              control={<Radio />}
            />
            <FormControlLabel
              value={"other"}
              label="Other"
              control={<Radio />}
            />
          </RadioGroup>
        </FormControl>
        <br />
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}

export default Form;
