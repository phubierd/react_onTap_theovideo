import { ADD_COMMENT } from "../Types/FakeBookType"

const stateDefault = {
    comments: [
        {name:'Yone',content:'Hi, Yassuo!!',avatar:'https://i.pravatar.cc/150?img=Yone'},
        {name:'Yassuo',content:'Hi, bro!!',avatar:'https://i.pravatar.cc/150?img=Yassuo'}
    ]
}


export const FakeBookReducer = (state=stateDefault,action)=>{

    switch(action.type){
        case ADD_COMMENT:{
            state.comments = [...state.comments,action.userComment]
            return {...state}
        }

        default: return {...state}
    }

    return {...state}
}