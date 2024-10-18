import { Grid } from '@mui/material'
import React from 'react'

function Grids() {
  return (
    <div>
        <Grid>
          <Grid item xs={4} md={2} lg={2} xl={2} sx={{background:'red'}}>
            Content A
          </Grid>
          <Grid item xs={4} md={2} lg={2} xl={2} sx={{background:'yellow'}}>
            Content A
          </Grid>
          
        </Grid>
    </div>
  )
}

export default Grids