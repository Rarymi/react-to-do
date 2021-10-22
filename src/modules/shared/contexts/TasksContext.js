import TaskService from 'modules/home/services/TaskService';
import { createContext, useEffect, useState } from 'react';

export const TasksContext = createContext({});

export default function TasksProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [selectedTask, setSelectedTask] = useState({});

  //Popula lista de tarefas
  useEffect(() => {
    TaskService.getAll().then((response) => {
      setTasks(response.data);
    });
  }, [setTasks]);

  const fetchTasks = async () => {
    const response = await TaskService.getAll();
    setTasks(response.data);
  };

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
        selectedTask,
        setSelectedTask,
        fetchTasks,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}
