import { useState } from 'react';
import { TasksContainer } from './style';

export default function Tasks({ tarefasState }) {
  const [isCompleted, setIsCompleted] = useState(false);

  return (
    <TasksContainer>
      {tarefasState.map((tarefa) => (
        <div>
          <h1 onClick={() => setIsCompleted(!isCompleted)} style={{ borderLeft: isCompleted ? '6px solid  red' : '' }}>
            {tarefa.titulo}
            {JSON.stringify(tarefa)}
          </h1>
        </div>
      ))}
    </TasksContainer>
  );
}
