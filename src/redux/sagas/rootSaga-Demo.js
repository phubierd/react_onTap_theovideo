
//redux co 2 loai:
// - action => object
// - action => function() (thường dùng để xử lý API hoặc gọi các action khác)

import { call, delay, fork, put, take, takeEvery, takeLatest } from "@redux-saga/core/effects"
import axios from "axios"
import { GET_TASK_API_PRAC } from "../Types/TodoListType"


function* getTaskApi(action) {

    // while (true) {
    //     yield take('getTaskApi') //theo dõi action => xem action nào dispatch mới làm các công việc bên dưới
    //     console.log('getTaskApi')
    //     //call api dispatch len reducer...
    // }

    // yield delay(3000)
    // console.log('getTaskApi',action);

    //let {data,status} =. ...=> bóc tách 2 thằng này
    let result = yield call(() => {
        return axios({
            url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
            method: 'get'
        })
    })
    // let result = yield call(()=>{
    //     try{
    //         return axios({
    //             url: 'http://svcy.myclass.vn/api/ToDoList/GetAllTask',
    //             method: 'get'
    //         })
    //     }catch(errors){
    //         alert(errors.response?.data)
    //     }
    // })
    //nhaận về api rồi mới xử lý tiếp
    // console.log('result', result)

    //sau khi lay gia tri thanh cong dùng put (giống dispatch bên thunk)
    yield put({
        type: GET_TASK_API_PRAC,
        taskList: result.data
    })


}

export function* rootSaga() {

    // yield fork(getTaskApi); //non-blocking chạy ko cần chờ (bất đồng bộ)


    //cần truyền action vào trên funct gettaskapi
    // yield takeEvery('getTaskApiAction', getTaskApi)
    //lắng nghe toàn bộ, ví dụ action 1 cần 5s, action 2 cần 2s => action 2 dc trả trước và kq cuối cùng sẽ k đúng

    yield takeLatest('getTaskApiAction', getTaskApi)
    //chỉ lắng nghe dòng cuối cùng, thường sử dụng cho việc lắng nghe notification


}