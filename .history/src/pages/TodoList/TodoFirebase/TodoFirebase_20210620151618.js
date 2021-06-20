import React from 'react'
import { List,ListItem,ListItemText} from '@material-ui/core'
export default function TodoFirebase(props) {
    return (
        <List>
            <ListItem>
                <ListItemText primary="Todo" secondary={props.text} />
            </ListItem>
            
        </List>
    )
}
