import { CloseIcon, ModalDetails, SaveIcon, TaskModalContainer } from './style';
import { AiFillCloseSquare } from 'react-icons/ai';
import { AiFillCheckSquare } from 'react-icons/ai';
import { useContext, useState } from 'react';
import { TasksContext } from 'modules/shared/contexts/TasksContext';
import TaskService from 'modules/home/services/TaskService';
export default function TaskModal() {
  const { selectedTask, setSelectedTask, fetchTasks } = useContext(TasksContext);
  const [title, setTitle] = useState(selectedTask.title);
  const [description, setDescription] = useState(selectedTask.description);
  const [taskStatus, setTaskStatus] = useState(selectedTask.status);

  function onTitleChange(event) {
    setTitle(event.target.value);
  }

  function onDescriptionChange(event) {
    setDescription(event.target.value);
  }

  function onStatusChange(event) {
    setTaskStatus(event.target.value);
  }

  async function onSaveButtonClick() {
    await TaskService.update({
      id: selectedTask.id,
      title,
      description,
      status: taskStatus,
    });
    await fetchTasks();

    setSelectedTask({});
  }
  return (
    <TaskModalContainer>
      <ModalDetails>
        <CloseIcon onClick={() => setSelectedTask({})}>
          <AiFillCloseSquare />
        </CloseIcon>
        <input
          value={title}
          onChange={onTitleChange}
          style={{ backgroundColor: '#e3dded', borderRadius: '4px', height: '23px' }}
          type='text'
        />
        <textarea
          value={description}
          onChange={onDescriptionChange}
          placeholder='Digite a descrição da tarefa...'
          name=''
          id='descriptionbox'
          cols='30'
          rows='10'
        ></textarea>
        <select name='' id='select' value={taskStatus} onChange={onStatusChange}>
          <option value='to_do'>To Do</option>
          <option value='in_progress'>In Progress</option>
          <option value='concluded'>Concluded</option>
        </select>
        <SaveIcon onClick={onSaveButtonClick}>
          <AiFillCheckSquare />
        </SaveIcon>
      </ModalDetails>
    </TaskModalContainer>
  );
}
