import axios from "axios"
import { GET_API_TODOLIST_BT } from "../Types/TodoListTypeBT"





export const GetApiActionBT = () => {
    return async dispatch => {
        try {
            const { data } = await axios({
                url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
                method: 'get',
            })
            // console.log('result',data)
            dispatch({
                type: GET_API_TODOLIST_BT,
                taskList: data,
            })
        } catch (err) {
            console.log(err.response?.data)
        }
    }
}


export const AddApiActionBT = (taskName) => {
    // console.log(taskName,'???')
    return async dispatch => {
        try {
            const result = await axios({
                url: 'http://svcy.myclass.vn/api/ToDoList/AddTask',
                method: 'post',
                data: taskName 
            })
            console.log('action ADD',result, taskName)
            dispatch(GetApiActionBT())
        } catch (err) {
            console.log(err.response?.data)
        }
    }
}

export const DelApiActionBT = (taskName)=>{
    return async dispatch=>{
        try{
            const {data} = await axios({
                url:`http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
                method:'delete'
            })
            dispatch(GetApiActionBT())
        }catch(err){
            console.log(err.response?.data)
        }
    }
}


export const CheckApiActionBT= (taskName)=>{
    return async dispatch=>{
        try{
            const {data} = await axios({
                url:`http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
                method:'put',
                data:{taskName}
            })
            dispatch(GetApiActionBT())
        }catch(err){
            console.log(err.response?.data)
        }
    }
}


export const RejectApiActionBT = (taskName)=>{
    return async dispatch =>{
        try{
            const {data} = await axios({
                url:`http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
                method:'put',
                data:{taskName}
            })
            dispatch(GetApiActionBT())
        }catch(err){
            console.log(err.response?.data)
        }
    }
}