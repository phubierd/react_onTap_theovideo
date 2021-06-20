import { Button,FormControl,InputLabel,Input} from '@material-ui/core';
import React, { useState } from 'react'
import TodoFirebase from './TodoFirebase/TodoFirebase';

export default function TodoListFirebase() {

    const [todos, setTodos] = useState(['Take dogs for a walk', 'Take the rubbish out'])
    const [input, setInput] = useState('');


    const addTodo = (event) => {
        event.preventDefault();
        setTodos([...todos, input])
        setInput('')
        console.log(todos)
    }

    return (
        <form className="container text-center">
            <h1>TodoList firebase!!</h1>
            <FormControl>
                <InputLabel >Write a Todo</InputLabel>
                <Input value={input} onChange={event => setInput(event.target.value)} />
                
            </FormControl>
            <Button disabled={!input} variant="contained" color="primary" onClick={addTodo} type="submit">
                ADD TODO
            </Button>
            <ul>
                {todos.map(todo => (
                    <TodoFirebase todo={todo}/>
                ))}



            </ul>
        </form>
    )
}
