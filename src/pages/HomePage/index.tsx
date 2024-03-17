import './Style.scss'
import axios, { Axios} from 'axios'
import TaskHeader from '../../component/TaskHeader'
import './Style.scss'
import Task from '../../component/Task'
import { useEffect, useState } from 'react'

const HomePage = () => {
        const [task, setTask] = useState('')
        const [allTask, setAllTask] = useState([])
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>  setTask(e.target.value)

    const getAlltask = async() => {
      const request = axios.get('/api/tasks')
      return request.then((res)=> setAllTask(res.data))
    }
    useEffect(()=>{
      getAlltask()

    }, [])
  return (
    <div className='home'>
      <TaskHeader handleChange={handleChange} task ={task}/>
      <div className='task-container'>
        {allTask.map(({name, id})=> <Task task={name} key={id}/>)}
      </div>
    </div>
  )
}

export default HomePage
