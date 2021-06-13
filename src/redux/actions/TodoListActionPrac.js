import axios from "axios"
import { GET_TASK_API_PRAC } from "../Types/TodoListType"

export const TodoListGetApiPrac = () => {
    return async dispatch => {
        try {
            let result = await axios({
                url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
                method: 'get'
            })

            dispatch({
                type: GET_TASK_API_PRAC,
                taskList: result.data
            })

        }
        catch (errors) {
            alert(errors.response?.data)
        }
    }
}

export const TodoListAddTask = (taskName) => {
    return async dispatch => {
        try {
            let result = await axios({
                url: 'http://svcy.myclass.vn/api/ToDoList/AddTask',
                method: 'post',
                data: { taskName: taskName }

            })
            dispatch(TodoListGetApiPrac())

        } catch (errors) {
            alert(errors.response?.data)
        }
    }
}


export const TodoListDellTask = (taskName) => {
    return async dispatch => {
        try {
            let result = await axios({
                url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
                method: 'delete',

            })
            dispatch(TodoListGetApiPrac())
        } catch (errors) {
            alert(errors.reponse?.data)
        }
    }
}

export const TodoListDoneTask = (taskName) => {
    return async dispatch => {
        try {
            let result = await axios({
                url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
                method: 'put',
                data: { taskName: taskName }
            })
            dispatch(TodoListGetApiPrac())
        } catch (errors) {
            alert(errors.response?.data)
        }

    }
}

export const TodoListUndoTask = (taskName)=>{
    return async dispatch =>{
        try{
            let result = await axios({
                url:`http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
                method:'put',
                data:{taskName : taskName}
            })
            dispatch(TodoListGetApiPrac())
        }
        catch(errors){
            alert(errors.response?.data)
        }
    }
}