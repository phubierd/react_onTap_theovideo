//redux co 2 loai:
// - action => object
// - action => function() (thường dùng để xử lý API hoặc gọi các action khác)

import { call, delay, fork, put, take, takeEvery, takeLatest } from "@redux-saga/core/effects"
import axios from "axios"
import { toDoListService } from "../../services/ToDoListService"
import { GET_TASK_API_PRAC } from "../Types/TodoListType"


function* getTaskApiAction(action) {

    // console.log('actionSaga',action)
    yield put ({
        type: 'DISPLAY_LOADING',

    })

    yield delay(3000)

    let result = yield call(toDoListService.getTaskApi)

    //sau khi lấy giá trị thành công dùng put(giống dispatch của thunk)
    yield put({
        type: GET_TASK_API_PRAC,
        taskList: result.data
    })

    yield put ({
        type:'HIDE_LOADING',
    })


}

export function* theoDoiActionGetTaskApi() {
    yield takeLatest('getTaskApiAction', getTaskApiAction)
}