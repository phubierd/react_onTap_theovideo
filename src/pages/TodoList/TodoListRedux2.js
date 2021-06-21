import React from 'react'
import Input from './TodoListRedux2/Input'
import styles from './TodoListRedux2/input.module.css'

export default function TodoListRedux2() {
    return (
        <div style={{display:'flex', placeItems:'center'}}>
            <div className={styles.input__redux2}>
                <Input />
            </div>
        </div>
        // <div style={{height:'100vh',width:'100vw',backgroundColor:'rgb(168, 173, 182)',placeItems: 'center'}}></div>

    )
}