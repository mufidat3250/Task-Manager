import './Style.scss'
import TaskHeader from '../../component/TaskHeader'
import './Style.scss'
import Task from '../../component/Task'
import { useEffect, useState } from 'react'
import taskServices from '../../services/tasks.js'

const HomePage = () => {
        const [task, setTask] = useState('')
        const [allTask, setAllTask] = useState([])
    

   
    useEffect(()=>{
      taskServices.getAllTask().then(data=> setAllTask(data))

    }, [])

    console.log(allTask)
    console.log({allTask})
  return (
    <div className='home'>
      {/* <TaskHeader setAllTask = {setAllTask}/> */}
      <div className='task-container'>
        {allTask.map(({name, id})=> <Task task={name} key={id}/>)}
      </div>
    </div>
  )
}

export default HomePage
