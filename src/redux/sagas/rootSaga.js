
//redux co 2 loai:
// - action => object
// - action => function() (thường dùng để xử lý API hoặc gọi các action khác)

import { fork, take } from "@redux-saga/core/effects"


function* getTaskApi() {

    while (true) {
        yield take('getTaskApi') //theo dõi action => xem action nào dispatch mới làm các công việc bên dưới
        console.log('getTaskApi')
        //call api dispatch len reducer...
    }
}

export function* rootSaga() {

    yield fork(getTaskApi);




}