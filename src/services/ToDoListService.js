import axios from "axios"
import { domain } from "../util/constant/settingSystem"

export class ToDoListService {
    constructor(){

    }
    
    getTaskApi = () => {
        return axios({
            url: `${domain}/ToDoList/GetAllTask`,
            method: 'get'
        })
    }
}


export const toDoListService =  new ToDoListService