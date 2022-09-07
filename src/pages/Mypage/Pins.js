import React from 'react';
import * as S from './MyPageStyle';

const Pins = ({ pin }) => {
  return (
    <S.PinsBoarder>
      <S.Img src={pin.imgUrl} />
    </S.PinsBoarder>
  );
};

export default Pins;
