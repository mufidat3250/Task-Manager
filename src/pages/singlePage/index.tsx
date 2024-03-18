import { useEffect, useState } from "react";
import Input from "../../component/Input";
import "./style.scss";
import Button from "../../component/Button";
import taskServices from '../../services/tasks.js';
import { useParams } from "react-router-dom"; 
const SingleTaskPage = () => {
  const [taskName, setTaskName] = useState('')
  const [singleTask, setSingleTask] = useState({ name:taskName, completed: false });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSingleTask({ ...singleTask, name: e.target.value });
  };
  const routeParams = useParams()
  
  useEffect(()=> {
    taskServices.getTask(routeParams.id as string).then((res)=> setSingleTask({...singleTask, name:res.name, completed:res.completed}))
  }, [setTaskName])

console.log({singleTask}, {taskName})
const onSubmit = () => {
    console.log('i am clicked')
      taskServices.updateTask(routeParams.id as string, singleTask).then((res)=> console.log(res))
  }

  console.log(singleTask);
  return (
    <div>
      {!singleTask ? <p>Loading...</p> : <div className="single-Page-wrapper">
      <div className="single-task">
        <h3 className="text-center font-light text-2xl ">Edit Task</h3>
        <div className="flex px-[2rem] flex-col gap-2">
          <div className="flex">
            <p className="w-[25%]">Task ID</p>
            <p className="flex-1">{routeParams.id}</p>
          </div>
          <div className="flex">
            <p className="w-[25%]">Name</p>
            <div className="w-[70%]">
              <Input
                onChange={handleChange}
                value={singleTask.name}
                name="name"
                otherClass={"py-[1px]"}
                placeHolder={""}
              />
            </div>
          </div>
          <div className="flex">
            <p className="w-[25%]">Completed</p>
            <input
              type="checkbox"
              onChange={() =>
                setSingleTask({
                  ...singleTask,
                  completed: !singleTask.completed,
                })
              }
              name="completed"
            />
          </div>
          <Button
            title="Edit"
            otherClass="!py-2 !rounded-sm"
            handleSubmit={onSubmit}
          />
        </div>
        <p className="text-center mt-2"> Message</p>
      </div>
    </div>}
    </div>
  );
};

export default SingleTaskPage;
