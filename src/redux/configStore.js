import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import { FakeBookReducer } from './reducer/FakeBookReducer';
import TodoListReducer from './reducer/TodoListReducer';
import reduxThunk from 'redux-thunk'
import { TodoListReducerPrac } from './reducer/TodoListReducerPrac';
import LoadingReducer from './reducer/LoadingReducer';
//middleware saga====================================================
import createMiddleWareSaga from 'redux-saga'
import { rootSaga } from './sagas/rootSaga';
import TodoListReducerSaga from './reducer/TodoListReducerSaga';

const middleWareSaga = createMiddleWareSaga();

//////////////////////////////////////////



const rootReducer = combineReducers({
    //reducer khai  bao tai day

    FakeBookReducer,
    TodoListReducer,
    TodoListReducerPrac,
    TodoListReducerSaga,
    LoadingReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, applyMiddleware(reduxThunk, middleWareSaga));

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(reduxThunk, middleWareSaga)
    // applyMiddleware(...middleware)
));
//goi saga
middleWareSaga.run(rootSaga)

export default store;