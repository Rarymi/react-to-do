import { useState } from 'react';
import AddTask from '../AddTask';
import Tasks from '../Tasks';
import { MyTasksContainer } from './style';
import Presentation from '../../images/gifs/presentation.gif';

export default function MyTasks() {
  const [tarefasState, setTarefasState] = useState([]);

  return (
    <MyTasksContainer>
      Tasks
      <AddTask tarefasState={tarefasState} setTarefasState={setTarefasState} />
      <Tasks tarefasState={tarefasState} />
      <img src={Presentation} alt='presentation-gif' />
    </MyTasksContainer>
  );
}
