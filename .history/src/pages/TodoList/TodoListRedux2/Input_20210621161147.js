import React, { useState } from 'react'
import styles from '../TodoListRedux2/input.css'
export default function Input() {

    const [input, setInput] = useState('')

    const addTodo = () => {

    }

    return (
        <div className="input">
            <input type="text" value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={addTodo}>Add!</button>
        </div>
    )
}
