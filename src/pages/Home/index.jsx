import { HomeContainer } from './style';

import TaskManager from 'modules/home/components/TaskManager';
import RightContent from 'modules/home/components/RightContent';
import TaskModal from 'modules/home/components/TaskModal';
import { useContext } from 'react';
import { TasksContext } from 'modules/shared/contexts/TasksContext';

export default function Home({ filter }) {
  const { selectedTask } = useContext(TasksContext);

  return (
    <HomeContainer>
      {selectedTask.id && <TaskModal />}
      <TaskManager filter={filter} />
      <RightContent />
    </HomeContainer>
  );
}
