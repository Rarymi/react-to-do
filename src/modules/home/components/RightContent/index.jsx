import Presentation from 'assets/gifs/presentation.gif';
import { RightContainer } from './style';

export default function RightContent() {
  return (
    <RightContainer>
      <img src={Presentation} alt='presentation-gif' />
    </RightContainer>
  );
}
