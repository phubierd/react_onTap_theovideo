import React from 'react'
import { List,ListItem,ListItemText} from '@material-ui/core'
export default function TodoFirebase(props) {
    return (
        <List>
            <ListItem>
                <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
            
        </List>
    )
}
