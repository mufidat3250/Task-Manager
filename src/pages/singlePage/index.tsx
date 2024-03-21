import { useEffect, useState } from "react";
import Input from "../../component/Input";
import "./style.scss";
import Button from "../../atoms/Button/index.js";
import taskServices from '../../services/tasks.js';
import { useParams } from "react-router-dom"; 
import CustomCheckBox from "../../component/CustomCheckbox/index.js";
import { useDispatch} from "react-redux";
import {setTask } from "../../statemanagement/slices/taskSlice.js";
import toast from "react-hot-toast";

const SingleTaskPage = () => {
  const [singleTask, setSingleTask] = useState({ name:'', completed: false});
  const disPatch = useDispatch()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSingleTask({ ...singleTask, name: e.target.value });
  };
  
  const routeParams = useParams()
  useEffect(()=> {
    taskServices.getTask(routeParams.id as string).then((res)=> {
      disPatch(setTask(res))
      setSingleTask({...singleTask, name: res.name, completed:res.completed})
    })
  }, [disPatch])
  
  const onSubmit = (e:React.FormEvent<HTMLElement>) => {
      e.preventDefault()
    try {
      taskServices.updateTask(routeParams.id as string, singleTask).then((res)=> {
        if (res){
          disPatch(setTask(res))
          toast.success('Successfully edited')
          }else {
          toast.error('Input field must not be empty') 
        }
         
      })
    } catch (error) {
        toast.error(`[error] Something went wrong`)
    }
}

return (
    <div>
      {!singleTask ? <p>Loading...</p> : <div className="single-Page-wrapper">
      <form className="single-task" onSubmit={onSubmit}>
        <h3 className="text-center font-light text-2xl ">Edit Task</h3>
        <div className="flex px-[2rem] flex-col gap-2">
          <div className="flex items-center">
            <p className="w-[25%]">Task ID</p>
            <p className="flex-1">{routeParams.id}</p>
          </div>
          <div className="flex items-center">
            <p className="w-[25%]">Name</p>
            <div className="w-[70%]">
              <Input
                onChange={handleChange}
                value={singleTask.name}
                name="name"
                otherClass={"py-[1px] !border-gray-600 border-[1px] focus:border-blue-600"}
                placeHolder={""}
              />
            </div>
          </div>
          <div className="flex items-center">
            <p className="w-[25%]">Completed</p>
            <CustomCheckBox completed={singleTask.completed} handleChecked={()=>{
              setSingleTask({...singleTask, completed:!singleTask.completed})
            }}/>
          </div>
          <Button
            title="Edit"
            otherClass="!py-2 !rounded-sm"
          />
        </div>
      </form>
    </div>}
    </div>
  );
};

export default SingleTaskPage;
