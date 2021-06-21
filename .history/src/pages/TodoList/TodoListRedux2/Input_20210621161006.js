import React, { useState } from 'react'

export default function Input() {

    const [input, setInput] = useState('')

    const addTodo = () => {

    }

    return (
        <div className="input__redux2">
            <input type="text" value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={addTodo}>Add!</button>
        </div>
    )
}
