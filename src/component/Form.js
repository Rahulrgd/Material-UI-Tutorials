import { CheckBox } from "@mui/icons-material";
import {
  Button,
  TextField,
  FormGroup,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import React, { useState } from "react";

function Form() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    terms: false,
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
        <Button type="submit">Submit</Button>
      </form>
    </>
  );
}

export default Form;
