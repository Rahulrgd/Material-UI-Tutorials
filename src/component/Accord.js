import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react'

function Accord() {
  return (
    <div>
        <Accordion>
            <AccordionSummary expandIcon={">"}>
                <Typography variant='h6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, eos?
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolorum architecto nostrum accusamus dicta itaque fuga modi cupiditate ipsam repudiandae?
                </Typography>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}

export default Accord