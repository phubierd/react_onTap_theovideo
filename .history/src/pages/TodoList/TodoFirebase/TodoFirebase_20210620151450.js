import React from 'react'

export default function TodoFirebase(props) {
    return (
        <List>
            <ListItem>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
            <li>{props.text}</li>
        </List>
    )
}
