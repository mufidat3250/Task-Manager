import './Style.scss'
import TaskHeader from '../../component/TaskHeader'
import './Style.scss'
import Task from '../../component/Task'
import { useEffect, useState } from 'react'
import taskServices from '../../services/tasks.js'

const HomePage = () => {
        const [allTask, setAllTask] = useState([])
        useEffect(()=>{
        taskServices.getAllTask().then(data=> setAllTask(data))
    }, [])
    
    return (
    <div className='home'>
      <TaskHeader setAllTasks = {setAllTask}/>
      <div className='task-container'>
        {allTask.map(({name, id})=> <Task task={name} key={id} id={id}/>)}
      </div>
    </div>
  )
}

export default HomePage
