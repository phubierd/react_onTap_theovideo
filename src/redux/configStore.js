import {applyMiddleware, combineReducers, createStore} from 'redux'
import { FakeBookReducer } from './reducer/FakeBookReducer';
import TodoListReducer from './reducer/TodoListReducer';
import reduxThunk from 'redux-thunk'
import { TodoListReducerPrac } from './reducer/TodoListReducerPrac';
import LoadingReducer from './reducer/LoadingReducer';
//middleware saga====================================================
import createMiddleWareSaga from 'redux-saga'
import { rootSaga } from './sagas/rootSaga';
import TodoListReducerSaga from './reducer/TodoListReducerSaga';
import TodoListReducerBT from './reducer/TodoListReducerBT';

const middleWareSaga = createMiddleWareSaga();

//////////////////////////////////////////



const rootReducer = combineReducers({
    //reducer khai  bao tai day

    FakeBookReducer,
    TodoListReducer,
    TodoListReducerPrac,
    TodoListReducerSaga,
    LoadingReducer,
    TodoListReducerBT,
})

 const store = createStore(rootReducer,applyMiddleware(reduxThunk,middleWareSaga));

 //goi saga
 middleWareSaga.run(rootSaga)

 export default store;