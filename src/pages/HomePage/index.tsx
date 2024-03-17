import './Style.scss'
import axios, { Axios,} from 'axios'
import TaskHeader from '../../component/TaskHeader'
import './Style.scss'
import Task from '../../component/Task'
import { useEffect, useState } from 'react'

const HomePage = () => {
        const [task, setTask] = useState('')
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>  setTask(e.target.value)

    const getAlltask = async() => {
      axios.get('/api/tasks').then((res)=> console.log(res))
    }
    useEffect(()=>{
      getAlltask()

    }, [])
  return (
    <div className='home'>
      <TaskHeader handleChange={handleChange} task ={task}/>
      <div className='task-container'>
        <Task task='Cooking'/>
      </div>
    </div>
  )
}

export default HomePage
