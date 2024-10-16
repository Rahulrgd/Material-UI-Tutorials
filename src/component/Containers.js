import { Container, Typography } from '@mui/material'
import React from 'react'

function Containers() {
  return (
    <div>
        <Container sx={{background:'yellow'}} maxWidth="xs">
            <Typography variant='body2'>
                This is Xs
            </Typography>
        </Container>
        <br />
        <Container sx={{background:'yellow'}} maxWidth="sm">
            <Typography variant='body2'>
                This is small
            </Typography>
        </Container>
        <br />
        <Container sx={{background:'yellow'}} maxWidth="md">
            <Typography variant='body2'>
                This is medium
            </Typography>
        </Container>
        <br />
        <Container sx={{background:'yellow'}} maxWidth="ls">
            <Typography variant='body2'>
                This is large
            </Typography>
        </Container>
        <br />
        <Container sx={{background:'yellow'}} maxWidth="xl">
            <Typography variant='body2'>
                This is extra large
            </Typography>
        </Container>
    </div>
  )
}

export default Containers