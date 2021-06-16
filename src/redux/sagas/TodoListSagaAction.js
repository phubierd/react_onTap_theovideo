//redux co 2 loai:
// - action => object
// - action => function() (thường dùng để xử lý API hoặc gọi các action khác)

import { call, delay, fork, put, take, takeEvery, takeLatest } from "@redux-saga/core/effects"
import axios from "axios"
import { toDoListService } from "../../services/ToDoListService"
import { STATUS_CODE } from "../../util/constant/settingSystem"
import { DISPLAY_LOADING, HIDE_LOADING } from "../Types/LoadingType"
import { ADD_TASK_API, CHECK_TASK_API, DELETE_TASK_API, GET_TASKLIST_API, GET_TASK_API_PRAC, REJECT_TASK_API } from "../Types/TodoListType"



/*
    14/6/2021 viết chức năng getTask
    action saga Lấy danh sách task từ api

*/


function* getTaskApiAction(action) {

    // console.log('actionSaga',action)
    yield put({
        type: DISPLAY_LOADING,
    })

    try {
        // console.log('gettask')
        let { data, status } = yield call(toDoListService.getTaskApi)
        // console.log(data,status)
        // yield delay(3000)

        if (status = STATUS_CODE.SUCCESS) {
            // console.log(status,'status')
            //sau khi lấy giá trị thành công dùng put(giống dispatch của thunk)
            yield put({
                type: GET_TASKLIST_API,
                taskList: data
            })
            console.log(data)
        } else {
            console.log('error')
        }

    } catch (err) {
        alert(err.response?.data)
    }


    yield put({
        type: HIDE_LOADING,
    })
}

export function* theoDoiActionGetTaskApi() {
    yield takeLatest(GET_TASKLIST_API, getTaskApiAction)
}


/*
    14/6/2021 viết chức năng getTask
    action saga Lấy danh sách task từ api

*/

function* addTaskApiAction(action) {
    console.log('action addtask', action);
    const { taskName } = action
    //gọi api 
    //hiển thị loading
    //thành công thì load lại task = cách gọi lại action saga load tasklist
    try {

        const { data, status } = yield call(() => { return toDoListService.addTaskApi(action.taskName) })
        console.log('status',status)
        if(status === STATUS_CODE.SUCCESS){
           yield put({
                type:GET_TASKLIST_API
            })
        }

       

    } catch (err) {
        alert(err.response?.data)
    }

}

export function* theoDoiActionAddTaskApi() {
    yield takeLatest(ADD_TASK_API, addTaskApiAction)
}



/*
    14/6/2021 viết chức năng getTask
    action saga del task từ api

*/
function * deleteTaskApi (action){
    // console.log(action)
    const {taskName} = action;
    try{
        //goi api
        const {data,status} = yield call(()=>{
            return toDoListService.delTaskApi(taskName)
        })

        if(status === STATUS_CODE.SUCCESS){
            //nếu thành công thì gọi lại action GET TASK LIST API (action saga thuc thi)
            yield put ({
                type:GET_TASKLIST_API
            })
        }
    }catch(err){
        console.log(err)
    }
}
export function* theoDoiDelTaskApi(){
    yield takeLatest(DELETE_TASK_API,deleteTaskApi)
}


/////////////////////
function * checkTaskApi (action){
    // console.log(action)
    const {taskName} = action;
    try{
        //goi api
        const {data,status} = yield call(()=>{
            return toDoListService.checkTaskApi(taskName)
        })

        if(status === STATUS_CODE.SUCCESS){
            //nếu thành công thì gọi lại action GET TASK LIST API (action saga thuc thi)
            yield put ({
                type:GET_TASKLIST_API
            })
        }
    }catch(err){
        console.log(err)
    }
}
export function* theoDoiCheckTaskApi(){
    yield takeLatest(CHECK_TASK_API,checkTaskApi)
}

////////

function * undoTaskApi (action){
    // console.log(action)
    const {taskName} = action;
    try{
        //goi api
        const {data,status} = yield call(()=>{
            return toDoListService.undoTaskApi(taskName)
        })

        if(status === STATUS_CODE.SUCCESS){
            //nếu thành công thì gọi lại action GET TASK LIST API (action saga thuc thi)
            yield put ({
                type:GET_TASKLIST_API
            })
        }
    }catch(err){
        console.log(err)
    }
}
export function* theoDoiUndoTaskApi(){
    yield takeLatest(REJECT_TASK_API,undoTaskApi)
}
