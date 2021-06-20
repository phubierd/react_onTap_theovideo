import React from 'react'
import { List, ListItem, ListItemText,ListItemAvatar } from '@material-ui/core'
export default function TodoFirebase(props) {
    return (
        <List>
            <ListItemAvatar>  
            </ListItemAvatar>
            <ListItem>
                <ListItemText primary={props.text}  />
            </ListItem>

        </List>
    )
}
