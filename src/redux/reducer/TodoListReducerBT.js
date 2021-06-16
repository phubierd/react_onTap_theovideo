import { GET_API_TODOLIST_BT } from "../Types/TodoListTypeBT"

const initialState = {
    taskList: [],
}

export default (state = initialState, action) => {
    switch (action.type) {

        case GET_API_TODOLIST_BT: {
            state.taskList = action.taskList
            return { ...state }
        }

        default:
            return state
    }
}
