import React from 'react';
import * as S from './MyPageStyle';
import { Link } from 'react-router-dom';

const Pins = ({ pin }) => {
  return (
    <Link key={pin.id} to={`/pins/${pin.pinId}`}>
      <S.PinsBoarder>
        <S.Img src={pin.imgUrl} />
      </S.PinsBoarder>
    </Link>
  );
};

export default Pins;
