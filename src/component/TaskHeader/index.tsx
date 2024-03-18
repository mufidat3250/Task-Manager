import { useState } from "react"
import Button from "../Button"
import Input from "../Input"
import taskService  from '../../services/tasks.js'
const TaskHeader = ({setAllTasks}:{setAllTasks:Function}) => {
  const [task, setTask] = useState('')
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>  setTask(e.target.value)
  // const handleSubmit = () => {
  //   taskService.createTask({name:task.trim(), completed:false}).then((res)=> setAllTasks((prev: any)=> console.log(prev)))
  // }
  console.log(task)
  return (
    <div className="bg-white w-full  py-11 rounded-sm shadow-sm text-center font-bold">
        <h1 className="text-xl">Task Manager</h1>
        <div className="flex items-center max-w-[80%] mx-auto mt-5" >
            <div className="flex-1 h-full">
            <Input onChange={handleChange} value={task} placeHolder="Start Typing..." otherClass={""} />
            </div>
            <div className="w-[30%]">
            <Button title='Submit' otherClass = 'rounded-tr-lg rounded-br-sm' handleSubmit={()=>{}} /> 
            </div>
        </div>
    </div>
  )
}

export default TaskHeader
