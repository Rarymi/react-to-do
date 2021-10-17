import styled from 'styled-components';

export const TaskContainer = styled.li`
  display: flex;
  background-color: var(--primary-150);
  height: 65px;
  overflow-wrap: break-word;
  font-size: 15px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  align-items: center;
  margin-top: 27px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 12px;
  justify-content: space-between;

  .left {
    display: flex;
    align-items: center;
    font-weight: bolder;
    color: var(--base-color-300);
  }

  .right {
    width: 25%;
    justify-content: flex-end;
    display: flex;
    align-items: center;
  }

  .title {
    font-size: 26px;
  }

  img {
    width: 26px;
    flex-direction: column;
    align-items: flex-end;
    display: flex;
  }

  #select {
    background-color: var(--primary-150);
    border: solid 2px var(--base-color-200);
    border-radius: 4px;
    option {
      background-color: var(--primary-150);
      color: var(--base-color-200);
      font-weight: bold;
    }
  }
`;
