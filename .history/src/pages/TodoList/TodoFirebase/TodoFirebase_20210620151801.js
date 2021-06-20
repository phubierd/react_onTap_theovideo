import React from 'react'
import { List, ListItem, ListItemText,ListItemAvatar,Avatar,ImageIcon } from '@material-ui/core'
export default function TodoFirebase(props) {
    return (
        <List>
            <ListItemAvatar>
                <Avatar>
                    <ImageIcon />
                </Avatar>
            </ListItemAvatar>
            <ListItem>
                <ListItemText primary="Todo" secondary={props.text} />
            </ListItem>

        </List>
    )
}
