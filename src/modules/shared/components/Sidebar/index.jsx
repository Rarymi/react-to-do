import { FilterContext } from 'modules/shared/contexts/FilterContext';
import { useContext } from 'react';
import { ConcludedContainer, ToDoContainer, ProgressContainer, SidebarContainer } from './style';

export default function Sidebar() {
  const { setFilter } = useContext(FilterContext);

  return (
    <SidebarContainer>
      <ToDoContainer onClick={() => setFilter('to_do')}>To Do</ToDoContainer>
      <ProgressContainer onClick={() => setFilter('in_progress')}>In Progress</ProgressContainer>
      <ConcludedContainer onClick={() => setFilter('concluded')}>Concluded</ConcludedContainer>
    </SidebarContainer>
  );
}
