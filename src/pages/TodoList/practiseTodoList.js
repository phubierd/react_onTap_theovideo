import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { TodoListAddTask, TodoListDellTask, TodoListDoneTask, TodoListGetApiPrac, TodoListUndoTask } from '../../redux/actions/TodoListActionPrac';

export default function PractiseTodoList(props) {
    let { taskList } = useSelector(state => state.TodoListReducerPrac)

    const dispatch = useDispatch();


    let [state, setState] = useState({

        values: {
            taskName: '',
        },
        errors: {
            taskName: '',
        }
    })






    const getTaskApi = () => {
        dispatch(TodoListGetApiPrac());

    }

    useEffect(() => {
        getTaskApi()
        // console.log(taskList)

    }, [])

    const renderTodoList = () => {
        return taskList.filter(item => !item.status).map((item, index) => {
            return <li key={index}>
                <span>{item.taskName}</span>
                <div className="buttons">
                    <button className="remove" type="button" onClick={()=>{delTaskTodo(item.taskName)}}>
                        <i className="fa fa-trash-alt" />
                    </button>
                    <button className="complete" onClick={()=>{doneTaskTodo(item.taskName)}} type='button'>
                        <i className="far fa-check-circle" />
                        <i className="fas fa-check-circle" />
                    </button>
                </div>
            </li>
        })
    }

    const renderTodoListDone = () => {
        return taskList.filter(item => item.status).map((item, index) => {
            return <li key={index}>
                <span>{item.taskName}</span>
                <div className="buttons">
                    <button className="remove" type="button" onClick={()=>{delTaskTodo(item.taskName)}}>
                        <i className="fa fa-trash-alt" />
                    </button>
                    <button className="complete" type='button' onClick={()=>{
                        undoTaskTodo(item.taskName)
                    }}>
                        <i className="far fa-undo" />
                        <i className="fas fa-undo" />
                    </button>
                </div>
            </li>
        })
    }


    const handleChange = (e) => {
        let { name, value } = e.target;

        let newValues = { ...state.values }
        newValues = { ...newValues, [name]: value }

        let newErrors = { ...state.errors }
        newErrors = { ...newErrors, [name]: value }



        let regexString = /^[a-z A-Z]+$/
        if (!regexString.test(value) || value.trim()==='') {
            //ko hop le
            newErrors[name] = name + ' invalid!!'
        } else {
            newErrors[name] = '';
        }


        setState({
            ...state,
            values: newValues,
            errors: newErrors,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       
        dispatch(TodoListAddTask(state.values.taskName))
    }


    const delTaskTodo =(taskName)=>{
        dispatch(TodoListDellTask(taskName))
    }

    const doneTaskTodo = (taskName)=>{
        dispatch(TodoListDoneTask(taskName))
    }

    const undoTaskTodo = (taskName) =>[
        dispatch(TodoListUndoTask(taskName))
    ]

    return (
        <div className="card">
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
                        <input id="newTask" type="text" placeholder="Enter an activity..." name='taskName' onChange={handleChange} />
                        <button id="addItem" onClick={handleSubmit} type='button'>
                            <i className="fa fa-plus" />
                        </button>
                    </div>
                    <p className='text text-danger'>{state.errors.taskName}</p>
                    <div className="card__todo">
                        {/* Uncompleted tasks */}
                        <ul className="todo" id="todo">
                            {renderTodoList()}
                        </ul>
                        {/* Completed tasks */}
                        <ul className="todo" id="completed">
                            {renderTodoListDone()}
                        </ul>
                    </div>
                </div>
            </form>
        </div>

    )
}





// import React from 'react'

// export default function practiseTodoList() {
//     return (
//         <div className="card">
//             <div className="card__header">
//                 <img src='./bg.png' />
//             </div>
//             {/* <h2>hello!</h2> */}
//             <div className="card__body">
//                 <div className="card__content">
//                     <div className="card__title">
//                         <h2>My Tasks</h2>
//                         <p>September 9,2020</p>
//                     </div>
//                     <div className="card__add">
//                         <input id="newTask" type="text" placeholder="Enter an activity..." />
//                         <button id="addItem">
//                             <i className="fa fa-plus" />
//                         </button>
//                     </div>
//                     <div className="card__todo">
//                         {/* Uncompleted tasks */}
//                         <ul className="todo" id="todo">
//                             <li>
//                                 <span>Đi ngủ</span>
//                                 <div className="buttons">
//                                     <button className="remove">
//                                         <i className="fa fa-trash-alt" />
//                                     </button>
//                                     <button className="complete">
//                                         <i className="far fa-check-circle" />
//                                         <i className="fas fa-check-circle" />
//                                     </button>
//                                 </div>
//                             </li>
//                         </ul>
//                         {/* Completed tasks */}
//                         <ul className="todo" id="completed">
//                             <li>
//                                 <span>Ăn sáng</span>
//                                 <div className="buttons">
//                                     <button className="remove">
//                                         <i className="fa fa-trash-alt" />
//                                     </button>
//                                     <button className="complete">
//                                         <i className="far fa-undo" />
//                                         <i className="fas fa-undo" />
//                                     </button>
//                                 </div>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>
//         </div>

//     )
// }

