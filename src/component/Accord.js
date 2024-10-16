import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Autocomplete,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

function Accord() {
  const courses = ["react", "nodejs", "mern", "java", "Spring boot"];
  return (
    <div>
      <Accordion>
        <AccordionSummary expandIcon={">"}>
          <Typography variant="h6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima,
            eos?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            dolorum architecto nostrum accusamus dicta itaque fuga modi
            cupiditate ipsam repudiandae?
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Auto Complete */}
      <Autocomplete sx={{width:200}} options={courses} renderInput={(params)=><TextField {...params} label="Select a course"/>}/>
    </div>
  );
}

export default Accord;
