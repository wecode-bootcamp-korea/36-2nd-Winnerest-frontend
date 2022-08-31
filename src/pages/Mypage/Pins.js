import React from 'react';
import * as S from './MyPageStyle';

const Pins = ({ pin }) => {
  return (
    // <Link key={pin.id} to={`/pins/${pin.id}`}>
    // merge 후 링크 연결 예정
    <S.PinsBoarder>
      <S.Img src={pin.imgUrl} />
    </S.PinsBoarder>
    // </Link>
  );
};

export default Pins;
