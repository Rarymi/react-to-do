import { TaskListContainer } from './style';
import TaskListItem from '../TaskListItem';
import TaskService from 'modules/home/services/TaskService';
import { TasksContext } from 'modules/shared/contexts/TasksContext';
import { useContext } from 'react';
import { FilterContext } from 'modules/shared/contexts/FilterContext';
export default function TaskList() {
  const { tasks, setTasks } = useContext(TasksContext);
  const { filter } = useContext(FilterContext);
  async function changeTaskStatus(taskReceived, status) {
    const currentTasks = [...tasks];

    const foundIndex = currentTasks.findIndex((task) => taskReceived.id === task.id);

    currentTasks[foundIndex] = {
      ...currentTasks[foundIndex],
      status,
    };

    await TaskService.update(currentTasks[foundIndex]);

    setTasks(tasks);
  }

  return (
    <TaskListContainer>
      <ul>
        {tasks.map((task) =>
          filter !== '' ? (
            task.status === filter && <TaskListItem key={task.id} task={task} changeTaskStatus={changeTaskStatus} />
          ) : (
            <TaskListItem key={task.id} task={task} changeTaskStatus={changeTaskStatus} />
          )
        )}
      </ul>
    </TaskListContainer>
  );
}
