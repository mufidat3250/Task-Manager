import { createSlice, current } from "@reduxjs/toolkit";

interface IinitialState {
    tasks: Array<{name:string, completed:false, id:string}>,
    task:{name:string, completed:false, id:string},
    completed:boolean
}

const initialValue:IinitialState = {
    tasks:[],
    task:{
        name: "",
        completed: false,
        id: ""
},
    completed:false
} 
const taskSlice = createSlice({
    name:'tasks',
    initialState:initialValue,
    reducers:{
        setTasks :(state, action)=>{
            state.tasks = action.payload
        }, 
        createTasks: (state, action) => {
            state.tasks.push(action.payload)
        },
        setTask: (state, action) => {
            state.task = action.payload
        },
        deleteTask: (state, action) => {
            console.log(current(state), action)
           const  objectToDelete = state.tasks.find((task)=> task.id === action.payload)
           state.tasks = state.tasks.filter((task)=> task.id !== objectToDelete?.id)
        },
        isChecked:(state, action) => {

            // state.tasks = 
            // console.log(JSON.parse(JSON.stringify(state)))
        }
}
})

export const {setTasks, setTask, createTasks, deleteTask, isChecked} = taskSlice.actions

export default taskSlice.reducer