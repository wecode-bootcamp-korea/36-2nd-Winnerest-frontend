import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

import Nav from '../../components/Nav.js/Nav';
import PinInfoContainer from './PinInfoContainer/PinInfoContainer';
import PinImgWrapper from './PinImgWrapper/PinImgWrapper';

const Pin = () => {
  const [pinData, setPinData] = useState({});
  const [tagId, setTagId] = useState(0);
  const [followBtn, setFollowBtn] = useState(false);

  const params = useParams();

  const getPinData = async () => {
    try {
      const res = await axios.get(`http://10.58.7.159:3000/pins/${params.id}`, {
        headers: {
          Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY2MjEyMjE2MX0.j5a-YigS0uywWrn6mEs34Fqy9hWTTFIFcr2Js_PP1FE',
        },
      });
      const { data } = res.data;
      if (data.tagIds.length > 1) {
        setTagId(data.tagIds.slice(0, 1).join());
      } else {
        setTagId(data.tagIds);
      }
      if (data.duplicatedResult === '1') {
        setFollowBtn(true);
      } else {
        setFollowBtn(false);
      }
      setPinData(data);
    } catch (err) {
      throw new Error(err);
    }
  };

  useEffect(() => {
    getPinData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Nav />
      <PinContentPos>
        <PinContent>
          <PinImage src={pinData.imgUrl} alt="로고 이미지" />
          <PinInfoContainer
            {...pinData}
            getPinData={getPinData}
            params={params}
            followBtn={followBtn}
            setFollowBtn={setFollowBtn}
          />
        </PinContent>
      </PinContentPos>
      {tagId && <PinImgWrapper tagId={tagId} />}
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

const PinImage = styled.img`
  max-width: 50%;
  max-height: 902px;
  border-radius: 24px;
`;

export default Pin;
