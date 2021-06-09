import {combineReducers, createStore} from 'redux'
import { FakeBookReducer } from './reducer/FakeBookReducer';




const rootReducer = combineReducers({
    //reducer khai  bao tai day

    FakeBookReducer
})



 const store = createStore(rootReducer);



 export default store;