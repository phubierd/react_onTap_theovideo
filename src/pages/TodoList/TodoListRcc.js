import axios from 'axios'
import React, { Component } from 'react'

export default class TodoListRcc extends Component {

    state = {
        taskList: [],
        values: {
            taskName: '',
        },
        errors: {
            taskName: '',
        },

    }

    getTaskList = () => {
        let promise = axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
            method: 'get'
        })
        promise.then(result => {
            console.log(result)
            //nếu gọi api lấy về kq thành công
            //=> set lại state của component
            this.setState({
                taskList: result.data
            })
            // console.log(this.state)
        })
        promise.catch(error => {
            console.log(error.response.data)
        })
    }

    componentDidMount() {
        //hàm sẽ tự động thực thi sau khi nội dung component dc render
        this.getTaskList();
    }

    renderTaskTodo = () => {
        return this.state.taskList.filter(item => !item.status).map((item, index) => {
            return <li key={index}>
                <span>{item.taskName}</span>
                <div className="buttons">
                    <button className="remove" type="button" onClick={() => {
                        this.delTask(item.taskName)
                    }}>
                        <i className="fa fa-trash-alt" />
                    </button>
                    <button className="complete" type="button" onClick={() => {
                        this.doneTask(item.taskName)
                    }}>
                        <i className="far fa-check-circle" />
                        <i className="fas fa-check-circle" />
                    </button>
                </div>
            </li>
        })
    }

    renderTaskTodoDone = () => {
        return this.state.taskList.filter(item => item.status).map((item, index) => {
            return <li key={index}>
                <span>{item.taskName}</span>
                <div className="buttons">
                    <button className="remove" type="button" onClick={() => {
                        this.delTask(item.taskName)
                    }}>
                        <i className="fa fa-trash-alt" />
                    </button>
                    <button className="complete" type="button" onClick={()=>{
                        this.undoTask(item.taskName)
                    }}>
                        <i className="far fa-undo" />
                        <i className="fas fa-undo" />
                    </button>
                </div>
            </li>
        })
    }


    handleChange = (e) => {
        let { value, name } = e.target;
        console.log(value, name)
        let newValues = { ...this.state.values }

        newValues = { ...newValues, [name]: value };

        let newErrors = { ...this.state.errors }

        let regexString = /^[a-z A-Z]+$/

        if (!regexString.test(value) || value.trim() === '') {
            //nếu ko hợp lệ
            newErrors[name] = name + ' invalid!'
        } else {
            newErrors[name] = ''
        }


        this.setState({
            ...this.state,
            values: newValues,
            errors: newErrors
        })
    }

    addTask = (e) => {
        e.preventDefault();
        console.log('taskName', this.state.values.taskName)

        let promise = axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/AddTask',
            method: 'post',
            data: { taskName: this.state.values.taskName }
        });
        promise.then(result => {
            console.log('axios result', result.data)
            this.getTaskList();
        })
        promise.catch(errors => {
            console.log(errors.response.data)
            alert('Task bị trùng')
        })


    }


    delTask = (taskName) => {
        let promise = axios({
            url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
            method: 'delete',
        })
        promise.then(result => {
            console.log(result.data, 'del taskname')
            this.getTaskList();
        });
        promise.catch(errors => {
            alert(errors.response.data)
        })
    }

    doneTask = (taskName) => {
        let promise = axios({
            url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
            method: 'put',
            data: { taskName: this.state.values.taskName }
        });
        promise.then(result => {
            this.getTaskList();
        })
        promise.catch(errors => {
            alert(errors.response.data)
        })
    }

    undoTask=(taskName)=>{
        let promise = axios({
            url:`http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
            method:'put',
            data:{taskName:this.state.values.taskName}
        })
        promise.then(result=>{
            this.getTaskList();

        })
        promise.catch(errors=>{
            alert(errors.response.data)
        })
    }

    render() {
        return (
            <form onSubmit={this.addTask}>
                {/* <button className="btn btn-info" onClick={() => { this.getTaskList() }}>Get TaskList</button> */}
                <div className="card">
                    <div className="card__header">
                        <img src='./bg.png' />

                    </div>
                    {/* <h2>hello!</h2> */}
                    <div className="card__body" >
                        <div className="card__content">
                            <div className="card__title">
                                <h2>My Tasks</h2>
                                <p>September 9,2020</p>
                            </div>
                            <div className="card__add">
                                <input name="taskName" id="newTask" type="text" placeholder="Enter an activity..." onChange={this.handleChange} />
                                <button id="addItem" onClick={this.addTask}>
                                    <i className="fa fa-plus" />
                                </button>
                            </div>
                            <p className="text text-danger">{this.state.errors.taskName}</p>
                            <div className="card__todo">
                                {/* Uncompleted tasks */}
                                <ul className="todo" id="todo">
                                    {this.renderTaskTodo()}
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
                                    {this.renderTaskTodoDone()}
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
                    </div>
                </div>
            </form>
        )
    }
}
