import axios from "axios"
import { domain } from "../util/constant/settingSystem"

export class ToDoListService {
    constructor() {

    }

    getTaskApi = () => {
        return axios({
            url: `${domain}/ToDoList/GetAllTask`,
            method: 'get'
        })
    }

    addTaskApi = (taskName) => {
        return axios({
            url: `${domain}/ToDoList/AddTask`,
            method: 'post',
            data: { taskName: taskName }
        })
    }
}


export const toDoListService = new ToDoListService