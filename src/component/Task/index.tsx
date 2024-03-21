import { useDispatch } from "react-redux"
import tasks from "../../services/tasks"
import DeleteIcon from "../DeleteIcon"
import EditIcon from "../EditIcon"
import { useNavigate } from 'react-router'
import { deleteTask } from "../../statemanagement/slices/taskSlice"
import Checked from "../../atoms/vectors/Checked."


/* eslint-disable react/prop-types */
const Task = ({task, id, completed}:{task:string, id:string, completed:boolean}) => {
  const navigate = useNavigate()
  console.log({completed})
  const dispatch = useDispatch()
  const handleDelete = () => {
    tasks.deleteTask(id).then((res)=> {
      dispatch(deleteTask(id))
    })
  }

  return (
    <div className="py-3 px-4 bg-white shadow-sm flex justify-between">
    <div className="flex gap-2 items-center">
      <p className="w-[20px] h-[20px]"> {completed && <Checked/>} </p>
      <h4 className={`${completed ? 'line-through': ''}`}>{task}</h4>
    </div>

    <div className="flex gap-2">
        <EditIcon className='cursor-pointer' onClick={()=> navigate(`/${id}`)}/>
        <DeleteIcon className='cursor-pointer' onClick={handleDelete}/>
    </div>
    </div>
  )
}

export default Task
