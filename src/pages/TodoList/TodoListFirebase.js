import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import React, { useState } from 'react'
import { useEffect } from 'react';
import TodoFirebase from './TodoFirebase/TodoFirebase';
import firebase from "firebase";
import db from './TodoFirebase/firebase'


export default function TodoListFirebase() {

    const [todos, setTodos] = useState([])
    const [input, setInput] = useState();

    //when the app loads, we need to liston to the database and fetch new todos as they get added/removed
    useEffect(() => {
        //this code here... 
        db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            // console.log('snapshot',snapshot.docs)
            // console.log(snapshot.docs.map(doc => doc.data()))
            setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })))
        })

    }, [])

    const addTodo = (event) => {
        event.preventDefault();

        db.collection('todos').add({
            todo: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        // setTodos([...todos, input])
        setInput('') //clear up the input after clicking add todo button
        // console.log(todos)
    }

    return (
        <form className="container text-center">
            <h1>TodoList firebase!!</h1>
            <FormControl>
                <InputLabel ><i className="fa fa-check-circle text-success"></i>Write a Todo</InputLabel>
                <Input value={input} onChange={event => setInput(event.target.value)} />

            </FormControl>
            <Button disabled={!input} variant="contained" color="primary" onClick={addTodo} type="submit">
                ADD TODO
            </Button>
            <ul>
                {todos.map(todo => (
                    <TodoFirebase todo={todo} />
                ))}



            </ul>
        </form>
    )
}
