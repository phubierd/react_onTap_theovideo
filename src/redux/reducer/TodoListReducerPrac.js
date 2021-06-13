import { GET_TASK_API_PRAC } from "../Types/TodoListType"

const initialState = {
    taskList: [],
    // values:{
    //     taskName:'',
    // },
    // errors:{
    //     taskName:'',
    // }
}

export const TodoListReducerPrac = (state = initialState, action) => {
    switch (action.type) {

        case GET_TASK_API_PRAC: {
            state.taskList = action.taskList
            return { ...state }
        }


        default:
            return state
    }
}

