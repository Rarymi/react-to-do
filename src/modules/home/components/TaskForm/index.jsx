import TaskService from 'modules/home/services/TaskService';
import { TasksContext } from 'modules/shared/contexts/TasksContext';
import { useContext, useState } from 'react';
import { TaskFormContainer } from './style';

export default function TaskForm() {
  const [inputState, setInputState] = useState('');
  const { tasks, setTasks } = useContext(TasksContext);

  function onInputChange(event) {
    setInputState(event.target.value);
  }

  async function createTask() {
    if (inputState === '') return;
    const taskToAdd = { title: inputState, description: '', status: 'to_do' };

    const response = await TaskService.create(taskToAdd);
    const createdTask = response.data;

    setTasks([...tasks, createdTask]);
    setInputState('');
  }

  return (
    <TaskFormContainer>
      <h4 style={{ fontSize: '45px' }} className='form-title'>
        Tasks
      </h4>
      <div className='form-wrapper'>
        <input
          style={{ fontSize: '22px', color: 'var(--base-color-300)', fontWeight: 'bold' }}
          placeholder='Digite sua nova tarefa...'
          type='text'
          value={inputState}
          onChange={onInputChange}
        />
        <button onClick={createTask}>
          <strong>Adicionar</strong>
        </button>
      </div>
    </TaskFormContainer>
  );
}
