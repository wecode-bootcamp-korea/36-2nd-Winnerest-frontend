import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Nav from '../../components/Nav.js/Nav';
import PinInfoContainer from './PinInfoContainer/PinInfoContainer';
import PinImgWrapper from './PinImgWrapper/PinImgWrapper';

const Pin = () => {
  const [pinWrapper, setPinWrapper] = useState({
    pinDatas: [],
    items: 20,
    prevItems: 0,
  });

  const getPinData = async () => {
    try {
      const res = await axios.get('http://10.58.4.114:3000/pins/main', {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY2MjEyMjE2MX0.j5a-YigS0uywWrn6mEs34Fqy9hWTTFIFcr2Js_PP1FE',
        },
      });
      const { data } = res.data;

      const { pinDatas: pinDATA, preItems, items } = pinWrapper;
      const sliceData = data.slice(preItems, items);

      setPinWrapper({ ...pinWrapper, pinDatas: [...pinDATA, ...sliceData] });
    } catch (err) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    getPinData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pinWrapper.items]);

  return (
    <>
      <Nav />
      <PinContentPos>
        <PinContent>
          <PinImage />
          <PinInfoContainer />
        </PinContent>
      </PinContentPos>
      {pinWrapper.pinDatas && <PinImgWrapper data={pinWrapper.pinDatas} />}
    </>
  );
};

const PinContentPos = styled.main`
  margin-top: 100px;
  margin-bottom: 36px;
`;

const PinContent = styled.article`
  display: flex;
  max-width: 1016px;
  margin: 0 auto;
  padding: 18px;
  border-radius: 24px;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 20px 0px;
`;

const PinImage = styled.img.attrs({
  src: '/image/고양이/뒤돌아보기.jpg',
  alt: '로고 이미지',
})`
  max-width: 50%;
  height: 902px;
  border-radius: 24px;
`;

export default Pin;
