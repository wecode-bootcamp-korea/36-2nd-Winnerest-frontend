import React from 'react';
import * as S from './MyPageStyle';

const Pins = ({ pin }) => {
  return (
    // <Link key={pin.id} to={`/pins/${pin.id}`}>
    <S.PinsBoarder>
      <S.Img src={pin.imgUrl} />
    </S.PinsBoarder>
    // </Link>
  );
};

export default Pins;
