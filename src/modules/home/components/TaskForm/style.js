import styled from 'styled-components';

export const TaskFormContainer = styled.div`
  display: flex;
  width: 100%;

  input {
    background-color: var(--primary-150);
    width: 100%;
    border-radius: 5px;
    color: var(--primary-050);
    border: 1px solid var(--primary-050);
    font-size: 17px;
  }

  button {
    background-color: var(--primary-150);
    color: var(--primary-050);
    width: 180px;
    height: 32px;
    border: 1px solid var(--primary-050);
    border-radius: 5px;
    margin-left: 13px;
    font-size: 17px;
    cursor: pointer;

    &:hover {
      background-color: var(--primary-450);
      color: var(--primary-100);
    }
  }
`;
