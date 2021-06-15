import { GET_TASKLIST_API } from "../Types/TodoListType"

const initialState = {
    taskList: []

}

export default (state = initialState, action) => {
    switch (action.type) {


        case GET_TASKLIST_API: {
            // console.log('action', action.taskList)

            state.taskList = action.taskList
            // console.log(state)
            return { ...state }
        }


        default:
            return state
    }
}
