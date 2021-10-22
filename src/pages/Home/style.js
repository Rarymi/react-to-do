import styled from 'styled-components';

export const HomeContainer = styled.main`
  padding: 30px;
  background-color: var(--primary-100);
  color: var(--primary-450);
  font-size: 32px;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 20px;
  grid-column: 2/15;
  height: 100%;
  background-color: var(--primary-100);
`;
