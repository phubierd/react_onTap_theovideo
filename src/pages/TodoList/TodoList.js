import React, { useState } from 'react'
import './TodoList.css'

export default function TodoList() {
    let [state, setState] = useState([])


    const handleChange = (e) => {

    }

    const handleSubmit = (e) => {

    }




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
                        <input id="newTask" type="text" placeholder="Enter an activity..." onChange={handleChange}/>
                        <button id="addItem">
                            <i className="fa fa-plus" />
                        </button>
                    </div>
                    <div className="card__todo">
                        {/* Uncompleted tasks */}
                        <ul className="todo" id="todo">
                            {/* <li>
                                <span>Đi ngủ</span>
                                <div className="buttons">
                                    <button className="remove">
                                        <i className="fa fa-trash-alt" />
                                    </button>
                                    <button className="complete">
                                        <i className="far fa-check-circle" />
                                        <i className="fas fa-check-circle" />
                                    </button>
                                </div>
                            </li> */}
                        </ul>
                        {/* Completed tasks */}
                        <ul className="todo" id="completed">
                            {/* <li>
                                <span>Ăn sáng</span>
                                <div className="buttons">
                                    <button className="remove">
                                        <i className="fa fa-trash-alt" />
                                    </button>
                                    <button className="complete">
                                        <i className="far fa-check-circle" />
                                        <i className="fas fa-check-circle" />
                                    </button>
                                </div>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </form>
        </div>

    )
}
