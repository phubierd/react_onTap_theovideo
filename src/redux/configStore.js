import {applyMiddleware, combineReducers, createStore} from 'redux'
import { FakeBookReducer } from './reducer/FakeBookReducer';
import TodoListReducer from './reducer/TodoListReducer';
import reduxThunk from 'redux-thunk'
import { TodoListReducerPrac } from './reducer/TodoListReducerPrac';



const rootReducer = combineReducers({
    //reducer khai  bao tai day

    FakeBookReducer,
    TodoListReducer,
    TodoListReducerPrac,
})



 const store = createStore(rootReducer,applyMiddleware(reduxThunk));



 export default store;