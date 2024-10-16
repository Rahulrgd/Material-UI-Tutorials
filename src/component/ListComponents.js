import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'

function ListComponents() {
    const courses = ["react", "nodejs", "mern", "java", "Spring boot"]
  return (
    <div>
        <List sx={{width:250, background:'gray'}}>
            {courses.map(course=>(
                <ListItem>
                <ListItemButton>{'>'}</ListItemButton>
                <ListItemText primary={course}/>
            </ListItem>
            ))}
            
        </List>
    </div>
  )
}

export default ListComponents