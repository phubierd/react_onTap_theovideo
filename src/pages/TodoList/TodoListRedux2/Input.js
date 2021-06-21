import React, { useState } from 'react'
import styles from './input.module.css'

export default function Input() {

    const [input, setInput] = useState('')

    const addTodo = () => {

    }

    return (
        <div className={styles.input__content}>
            <input className={styles.input} type="text" value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={addTodo}>Add!</button>
        </div>
    )
}
