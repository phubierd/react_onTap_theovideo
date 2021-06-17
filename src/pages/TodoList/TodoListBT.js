import React, { useEffect, useState } from 'react'
import { Formik, useFormik } from 'formik'
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { AddApiActionBT, CheckApiActionBT, DelApiActionBT, GetApiActionBT, RejectApiActionBT } from '../../redux/actions/TodoListActionBT';


export default function TodoListBT() {

    const { taskList } = useSelector(state => state.TodoListReducerBT)
    // console.log('taskList', taskList)
    const dispatch = useDispatch();

    useEffect(() => {
        GetApiTodoList()

        return () => {

        }
    }, [])

    const formik = useFormik({
        initialValues: {
            taskName: '',
        },
        validationSchema: Yup.object().shape({
            taskName: Yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Không được để trống!!')
                .matches(/^[A-Z a-z]+$/, 'Không bao gồm số & chữ tiếng Việt!!'),
        }),
        onSubmit: values => {
            console.log('values add submit', values)

            dispatch(AddApiActionBT(values))

        }

    })

    

    // console.log("formik.values",formik.values)
    const { handleChange, handleBlur, touched, errors } = formik

    const GetApiTodoList = () => {
        dispatch(GetApiActionBT())
    }

    const DelApiTodoList = (taskName) => {
        console.log('taskName del', taskName)
        dispatch(DelApiActionBT(taskName))
    }

    const CheckApiTodoList = (taskName) => {
        console.log('taskName check', taskName)
        dispatch(CheckApiActionBT(taskName))
    }

    const RejectApiTodoList = (taskName) => {
        console.log('taskName reject', taskName)
        dispatch(RejectApiActionBT(taskName))
    }

    const renderTodoList = () => {
        return taskList.filter(item => !item.status).map((item, index) => {
            return <li key={index}>
                <span>{item.taskName}</span>
                <div className="buttons">
                    <button className="remove" type="button" onClick={() => { DelApiTodoList(item.taskName) }}>
                        <i className="fa fa-trash-alt" />
                    </button>
                    <button className="complete" type="button" onClick={() => { CheckApiTodoList(item.taskName) }}>
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
                    <button className="remove" type="button" onClick={() => { DelApiTodoList(item.taskName) }}>
                        <i className="fa fa-trash-alt" />
                    </button>
                    <button className="complete" type="button" onClick={() => { RejectApiTodoList(item.taskName) }}>
                        <i className="far fa-undo" />
                        <i className="fas fa-undo" />
                    </button>
                </div>
            </li>
        })
    }


    return (
        <form className="card" onSubmit={formik.handleSubmit}>
            <div className="card__header">
                <img src='./bg.png' />
            </div>
            {/* <h2>hello!</h2> */}
            <div className="card__body">
                <div className="card__content">
                    <div className="card__title">
                        <h2>My Tasks</h2>
                        <p>September 9,2020</p>
                    </div>
                    <div className="card__add">
                        <input name="taskName" id="newTask" type="text" placeholder="Enter an activity..." onChange={handleChange} onBlur={handleBlur} />
                        <button id="addItem">
                            <i className="fa fa-plus" />
                        </button>
                    </div>
                    {touched.taskName && errors.taskName && <p className="text text-danger">{errors.taskName}</p>}
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
            </div>
        </form>

    )
}

