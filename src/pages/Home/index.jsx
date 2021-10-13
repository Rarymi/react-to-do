import { HomeContainer } from './style';

import TaskManager from 'modules/home/components/TaskManager';
import RightContent from 'modules/home/components/RightContent';

export default function Home() {
  return (
    <HomeContainer>
      <TaskManager />
      <RightContent />
    </HomeContainer>
  );
}
