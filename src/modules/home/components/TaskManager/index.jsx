import { useState } from 'react';
import AddTaskForm from '../TaskForm';
import TaskList from '../TaskList';
import { TaskManagerContainer } from './style';

export default function TaskManager() {
  const [tarefasState, setTarefasState] = useState([]);

  return (
    <TaskManagerContainer>
      <AddTaskForm tarefasState={tarefasState} setTarefasState={setTarefasState} />
      <TaskList tarefasState={tarefasState} />
    </TaskManagerContainer>
  );
}
