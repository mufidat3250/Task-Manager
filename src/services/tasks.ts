import axios from "axios"

const baseURL = '/api/tasks'

export const getAllTask = async()=> {
    const response = await axios.get(baseURL)
    const result = await response.data
    return result
}
const getTask = (id:string) => {
    const response = axios.get(`${baseURL}/${id}`)
    return response.then((res)=> res.data)
}
const createTask = async(newTask:{name:string, completed:boolean}) => {
    console.log(newTask)
    const response = axios.post(baseURL, newTask)
    const result = (await response).data
    return result
}
const updateTask = (id:string, updateObject:{name:string, completed:boolean}) => {
    const response = axios.put(`${baseURL}/${id}`, updateObject)
    return response.then((res)=> res.data)
}

const deleteTask = (id:string) => {
    const response = axios.delete(`${baseURL}/${id}`)
    return response.then((res)=> res)
}

export default {
    getAllTask,
    getTask,
    createTask,
    deleteTask,
    updateTask
}

