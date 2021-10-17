import { FilterContext } from 'modules/shared/contexts/FilterContext';
import { useContext } from 'react';
import { ConcludedContainer, ToDoContainer, ProgressContainer, SidebarContainer } from './style';

export default function Sidebar() {
  const { setFilter } = useContext(FilterContext);

  function changeFilter(filter) {
    setFilter(filter);
  }

  return (
    <SidebarContainer>
      <ToDoContainer onClick={() => changeFilter('to_do')}>To Do</ToDoContainer>
      <ProgressContainer onClick={() => changeFilter('in_progress')}>In Progress</ProgressContainer>
      <ConcludedContainer onClick={() => changeFilter('concluded')}>Concluded</ConcludedContainer>
    </SidebarContainer>
  );
}
