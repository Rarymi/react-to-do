import { useState } from 'react';
import { TaskListContainer } from './style';

export default function TaskList({ tarefasState }) {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <TaskListContainer>
      {tarefasState.map((tarefa) => (
        <div>
          <h1 onClick={() => setIsCompleted(!isCompleted)} style={{ borderLeft: isCompleted ? '6px solid  red' : '' }}>
            {tarefa.titulo}
            {JSON.stringify(tarefa)}
          </h1>
        </div>
      ))}
    </TaskListContainer>
  );
}
