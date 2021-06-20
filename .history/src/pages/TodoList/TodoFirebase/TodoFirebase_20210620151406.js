import React from 'react'

export default function TodoFirebase(props) {
    return (
        <List>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <ImageIcon />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
            <li>{props.text}</li>
        </List>
    )
}
