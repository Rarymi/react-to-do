import TaskForm from '../TaskForm';
import TaskList from '../TaskList';
import { TaskManagerContainer } from './style';

export default function TaskManager() {
  return (
    <TaskManagerContainer>
      <TaskForm />
      <TaskList />
    </TaskManagerContainer>
  );
}
