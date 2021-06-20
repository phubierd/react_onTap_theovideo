import React, { useState } from 'react'
import { List, ListItem, ListItemText, ListItemAvatar, Button, Modal, makeStyles } from '@material-ui/core'
import db from './firebase'

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function TodoFirebase(props) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState()
    const handleOpen = () => {
        setOpen(true)
    }

    const updateTodo = () => {
        //update the todo 
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, { merge: true })
        setOpen(false)
    }

    return (
        <>
            <Modal
                open={open}
                onClose={e => setOpen(false)}
            >
                <div className="classes.paper">
                    <h1>modal</h1>
                    <input placeholder={props.todo.todo} value={input} onChange={event => event.target.value} />
                    <Button onClick={updateTodo}>Update Todo!!</Button>
                </div>
            </Modal>
            <List className="todo__list">
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItem>
                    <ListItemText primary={props.todo.todo} secondary="Deadline..." />
                </ListItem>
                <Button variant="contained" color="primary"><i class="fa fa-edit" onClick={e => setOpen(true)}></i></Button>
                <Button variant="contained" color="secondary" onClick={(event) => {
                    db.collection('todos').doc(props.todo.id).delete()
                }}><i className="fa fa-trash"></i></Button>

            </List>
        </>
    )
}
