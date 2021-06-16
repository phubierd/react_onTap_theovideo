import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_TASK_API, CHECK_TASK_API, DELETE_TASK_API, GET_TASKLIST_API, REJECT_TASK_API } from '../../redux/Types/TodoListType'
import './TodoList.css'

export default function TodoListSaga(props) {

    const dispatch = useDispatch()
    const { taskList } = useSelector(state => state.TodoListReducerSaga)

    console.log('taskList', taskList)

    let [state, setState] = useState({
        // taskList: [],
        values: {
            taskName: '',
        },
        errors: {
            taskName: '',
        }
    })

    const getTaskList = () => {
        // dispatch action saga
        dispatch({
            type: GET_TASKLIST_API,
        })
    }

    useEffect(() => {
        //goi ham getTaskList
        getTaskList()

    }, [])

    const renderToDoList = () => {
        return taskList?.filter(item => !item.status).map((item, index) => {
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
        return taskList?.filter(item => item.status).map((item, index) => {
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
        e.preventDefault();
        dispatch({
            type: ADD_TASK_API,
            taskName: state.values.taskName
        })

    }

    const delTaskName = (taskName) => {
        console.log(taskName)
        dispatch({
            type: DELETE_TASK_API,
            taskName: taskName
        })
    }

    const taskDone = (taskName) => {
        dispatch({
            type: CHECK_TASK_API,
            taskName
        })
    }

    const undoTask = (taskName) => {
        dispatch({
            type: REJECT_TASK_API,
            taskName
        })
    }






    return (
        <div className="card">
            <button type='button' className='btn btn-success' onClick={() => {
                dispatch({
                    type: 'getTaskApiAction',
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
