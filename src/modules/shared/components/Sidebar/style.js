import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  grid-column: 1/2;
  height: 100%;
  background-color: var(--primary-100);

  & > * {
    height: 130px;
    color: var(--primary-100);
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ToDoContainer = styled.div`
  background-color: var(--base-color-100);
  display: flex;
  text-align: center;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;
`;
export const ProgressContainer = styled.div`
  background-color: var(--base-color-200);
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;
`;
export const ConcludedContainer = styled.div`
  background-color: var(--base-color-300);
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  cursor: pointer;
`;
