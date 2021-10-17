import { TaskContainer } from './style';
import Info from 'assets/icons/info.png';
import { TasksContext } from 'modules/shared/contexts/TasksContext';
import { useContext } from 'react';

export default function TaskListItem({ task, changeTaskStatus }) {
  const { setSelectedTask } = useContext(TasksContext);

  return (
    <TaskContainer
      style={{
        textDecoration: task.status === 'concluded' ? 'line-through' : '',
        borderLeft: task.status === 'concluded' ? '6px solid  #337945' : '',
      }}
    >
      <div className='left'>
        <div className='title' style={{ marginLeft: '16px' }}>
          {task.title}
        </div>
      </div>
      <div className='right'>
        <div>
          <select
            name='options'
            id='select'
            value={task.status}
            onChange={(event) => {
              changeTaskStatus(task, event.target.value);
            }}
          >
            <option value='to_do'>To Do</option>
            <option value='in_progress'>In Progress</option>
            <option value='concluded'>Concluded</option>
          </select>
        </div>
        <img onClick={() => setSelectedTask(task)} style={{ marginLeft: '16px' }} src={Info} alt='' />
      </div>
    </TaskContainer>
  );
}
