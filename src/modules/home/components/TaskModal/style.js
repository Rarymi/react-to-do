import styled from 'styled-components';

export const TaskModalContainer = styled.div`
  background-color: #00000066;
  width: 100vw;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const ModalDetails = styled.div`
  background-color: #d5cce0;
  width: 50%;
  height: 50%;
  border-radius: 22px;
  display: flex;
  flex-direction: column;

  justify-content: space-evenly;
  align-content: space-around;
  align-items: stretch;
  flex-wrap: wrap;

  #descriptionbox {
    background-color: #e3dded;
    border-radius: 5px;
    width: 80%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #select {
    border: solid 2px var(--base-color-200);
    border-radius: 4px;
    width: 10%;
    display: flex;

    option {
      background-color: var(--primary-150);
      color: var(--base-color-200);
      font-weight: bold;
      display: flex;
    }
  }
`;

export const CloseIcon = styled.div`
  color: var(--base-color-100);
  display: flex;
  justify-content: flex-end;
  align-content: space-between;
`;

export const SaveIcon = styled.div`
  color: var(--base-color-300);
  display: flex;
  justify-content: flex-end;
  align-content: space-between;
`;
