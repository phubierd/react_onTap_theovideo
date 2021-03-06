import { all, call } from "@redux-saga/core/effects";
import * as TodoListSagaAction from './TodoListSagaAction'



export function* rootSaga() {

    yield all ([
        //nghiệp vụ theo dõi các aciton saga todolist
        TodoListSagaAction.theoDoiActionGetTaskApi(),
        TodoListSagaAction.theoDoiActionAddTaskApi(),
        TodoListSagaAction.theoDoiDelTaskApi(),
        TodoListSagaAction.theoDoiCheckTaskApi(),
        TodoListSagaAction.theoDoiUndoTaskApi(),




        //nghiệp vụ saga khác...

    ])

}