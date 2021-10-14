import { ConcludedContainer, OverdueContainer, ProgressContainer, SidebarContainer } from './style';

export default function Sidebar() {
  return (
    <SidebarContainer>
      <OverdueContainer>Overdue</OverdueContainer>
      <ProgressContainer>In Progress</ProgressContainer>
      <ConcludedContainer>Concluded</ConcludedContainer>
    </SidebarContainer>
  );
}
