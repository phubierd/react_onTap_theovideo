import axios from 'axios'
import { GET_TASK_API } from '../Types/TodoListType'



// action có 2 loại:
// action thực thi ngay làm thay đổi reducer
// action phải thực hiện xử lý rồi mới gọi action 1 thực thi(async action)

export const getTaskListApi = () => {

    //tiền xử lý dữ liệu => xử lý function
    return dispatch => {
        let promise = axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
            method: 'get'
        })
        promise.then(result => {
            // console.log(result.data)
            dispatch({
                type: GET_TASK_API,
                taskList: result.data
            })
        })
        promise.catch(error => {
            alert(error.response.data)
        })
    }
}


export const addTaskApi = (taskName) => {


    return dispatch => {
        //xử lý trước khi dispatch
        let promise = axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/AddTask',
            method: 'post',
            data: { taskName: taskName }
        })
        promise.then(result => {
            // console.log(result.data)
            dispatch(getTaskListApi())
        })
        promise.catch(errors => {
            alert(errors.response.data)
        })
    }
}



export const delTaskApi = (taskName) => {


    return dispatch => {
        let promise = axios({
            url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
            method: 'DELETE',
        })
        promise.then(result => {

            //sau khi thuc hien api  gọi phương thức dispatch action get tasklist api để load lại task
            dispatch(getTaskListApi())
        })
        promise.catch(errors => {
            alert(errors.response.data)
        })
    }
}


export const taskDoneApi = (taskName) => {
    return dispatch => {
        let promise = axios({
            url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
            method: 'put',
            data: { taskName: taskName }
        })
        promise.then(result => {
            dispatch(getTaskListApi());
        })
        promise.catch(errors => {
            alert(errors.response.data)
        })
    }
}


export const undoTaskApi = (taskName) => {
    return dispatch => {
        let promise = axios({
            url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
            method: 'put',
            data: { taskName: taskName }
        })
        promise.then(result => {
            dispatch(getTaskListApi());
        })
        promise.catch(errors => {
            alert(errors.response.data)
        })
    }
}



// function demoAsync ()=>{
//     let promise = callApiAxios ();
//     //nếu kquả trả về promise 
//     // => promise.then & promise.catch
//     promise.then (function (result)=>{

//     })

//     console.log(123)  => thằng này sẽ gọi trước promise.then (promise.then sẽ đợi lấy api về rồi mới chạy)

//     setTimeout(() => {
//             console.log(12312)
//     }, 10000);


//     promise.catch()


// }