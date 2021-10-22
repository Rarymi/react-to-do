import Complet from '../../../../assets/images/complet.svg';
import React from '../../../../assets/gifs/react.gif';
import { RightContainer } from './style';

export default function RightContent() {
  return (
    <RightContainer>
      <img className='gif-react' src={React} alt='presentation-gif' />
      <img src={Complet} alt='presentation-gif' />
    </RightContainer>
  );
}
