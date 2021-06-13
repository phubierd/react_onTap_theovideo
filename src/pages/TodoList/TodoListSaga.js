import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import './TodoList.css'

export default function TodoListSaga(props) {

    const dispatch = useDispatch()

    let [state, setState] = useState({
        taskList: [],
        values: {
            taskName: '',
        },
        errors: {
            taskName: '',
        }
    })

    const getTaskList = () => {

    }

    useEffect(() => {

    }, [])

    const renderToDoList = () => {
        return state.taskList.filter(item => !item.status).map((item, index) => {
            return <li key={index}>
                <span>{item.taskName}</span>
                <div className="buttons">
                    <button className="remove" type='button' onClick={() => { delTaskName(item.taskName) }} >
                        <i className="fa fa-trash-alt" />
                    </button>
                    <button className="complete" type='button' onClick={() => { taskDone(item.taskName) }}>
                        <i className="far fa-check-circle" />
                        <i className="fas fa-check-circle" />
                    </button>
                </div>
            </li>
        })
    }

    const renderToDoListDone = () => {
        return state.taskList.filter(item => item.status).map((item, index) => {
            return <li key={index}>
                <span>{item.taskName}</span>
                <div className="buttons" type='button'>
                    <button className="remove" type='button' onClick={() => { delTaskName(item.taskName) }}>
                        <i className="fa fa-trash-alt" />
                    </button>
                    <button className="complete" type='button' onClick={() => { undoTask(item.taskName) }}>
                        <i className="far fa-undo" />
                        <i className="fas fa-undo" />
                    </button>
                </div>
            </li>
        })
    }




    const handleChange = (e) => {
        let { name, value } = e.target
        // console.log(name,value)

        let newValues = { ...state.values }
        newValues = { ...newValues, [name]: value }


        let newErrors = { ...state.errors }
        newErrors = { ...newErrors, [name]: value }
        let regexString = /^[a-z A-Z]+$/

        if (!regexString.test(value) || value.trim() === "") {
            //neu ko hop le
            newErrors[name] = name + ' invalid!!!'
        } else {
            newErrors[name] = ''
        }

        setState({
            ...state,
            values: newValues,
            errors: newErrors,
        })
        // console.log(state)
    }



    const handleSubmit = (e) => {


    }

    const delTaskName = (taskName) => {

    }

    const taskDone = (taskName) => {

    }

    const undoTask = (taskName) => {

    }






    return (
        <div className="card">
            <button className='btn btn-success' onClick={() => {
                dispatch({
                    type:'getTaskApi',
                })
            }}> dispatch action saga getTaskApi</button>
            <div className="card__header">
                <img src='./bg.png' />

            </div>
            {/* <h2>hello!</h2> */}
            <form className="card__body" onSubmit={handleSubmit}>
                <div className="card__content">
                    <div className="card__title">
                        <h2>My Tasks</h2>
                        <p>September 9,2020</p>
                    </div>
                    <div className="card__add">
                        <input name="taskName" id="newTask" type="text" placeholder="Enter an activity..." onChange={handleChange} />
                        <button id="addItem" type='button' onClick={handleSubmit}>
                            <i className="fa fa-plus" />
                        </button>
                    </div>
                    <p className="text text-danger">{state.errors.taskName}</p>
                    <div className="card__todo">
                        {/* Uncompleted tasks */}
                        <ul className="todo" id="todo">
                            {renderToDoList()}
                        </ul>
                        {/* Completed tasks */}
                        <ul className="todo" id="completed">
                            {renderToDoListDone()}
                        </ul>
                    </div>
                </div>
            </form>
        </div>

    )
}