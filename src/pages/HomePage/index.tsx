import "./Style.scss";
import TaskHeader from "../../component/TaskHeader";
import "./Style.scss";
import { useEffect } from "react";
import taskServices from "../../services/tasks.js";
import { useDispatch, useSelector } from "react-redux";
import { setTasks } from "../../statemanagement/slices/taskSlice";
import Task from "../../component/Task/index.js";

const HomePage = () => {
  const dispatch = useDispatch();
  //@ts-ignore
  const { tasks } = useSelector(
    (state: {
      tasks: Array<{ name: string; completed: boolean; id: string }>;
    }) => state.tasks
  );
  // console.log(tasks)
  useEffect(() => {
    taskServices.getAllTask().then((data) => {
      dispatch(setTasks(data));
    });
  }, []);

  return (
    <div className="home">
      <TaskHeader />
      <div className="task-container">
        {tasks.map(
          ({
            name,
            id,
            completed,
          }: {
            name: string;
            id: string;
            completed: boolean;
          }) => (
            <Task task={name} key={id} id={id} completed={completed} />
          )
        )}
      </div>
    </div>
  );
};

export default HomePage;
