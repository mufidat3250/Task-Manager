import DeleteIcon from "../DeleteIcon"
import EditIcon from "../EditIcon"
import { useNavigate } from 'react-router'


/* eslint-disable react/prop-types */
const Task = ({task, id}:{task:string, id:string}) => {
  const navigate = useNavigate()


  return (
    <div className="py-3 px-4 bg-white shadow-sm flex justify-between">
      <h4>{task}</h4>
    <div className="flex gap-2">
        <EditIcon className='cursor-pointer' onClick={()=> navigate(`/${id}`)}/>
        <DeleteIcon className='cursor-pointer'/>
    </div>
    </div>
  )
}

export default Task
