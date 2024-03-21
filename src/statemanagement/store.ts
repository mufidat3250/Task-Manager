import { configureStore } from "@reduxjs/toolkit";
import TasksReducer from './slices/taskSlice'

const store = configureStore({
    reducer:{
        tasks:TasksReducer
    }
})
export default store