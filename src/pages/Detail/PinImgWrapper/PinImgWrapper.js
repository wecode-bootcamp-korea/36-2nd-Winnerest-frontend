import { useState, useEffect } from 'react';
import axios from 'axios';

import * as S from './PinImgWrapperStyle';

const PinImgWrapper = ({ tagId }) => {
  const [pinWrapper, setPinWrapper] = useState({
    pinDatas: [],
    prevItems: 0,
  });
  const [isData, setIsData] = useState(true);

  const debounce = (func, delay) => {
    let timer = null;

    return () => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(func, delay);
    };
  };

  const getPinData = async () => {
    if (tagId) {
      try {
        const res = await axios.get(
          `http://10.58.7.159:3000/pins/recommend/${tagId}?pageSize=10&page=${pinWrapper.prevItems}`,
          {
            headers: {
              Authorization:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY2MjEyMjE2MX0.j5a-YigS0uywWrn6mEs34Fqy9hWTTFIFcr2Js_PP1FE',
            },
          }
        );
        const { data } = res.data;

        if (data.length === 0) {
          setIsData(false);
        }

        setPinWrapper({
          ...pinWrapper,
          pinDatas: [...pinWrapper.pinDatas, ...data],
        });
      } catch (err) {
        throw new Error(err);
      }
    }
  };
  useEffect(() => {
    isData && getPinData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isData, pinWrapper.prevItems]);

  useEffect(() => {
    const onScroll = () => {
      let { prevItems } = pinWrapper;
      const { documentElement, body } = document;

      const scrollTop = Math.max(documentElement.scrollTop, body.scrollTop);
      const clientHeight = documentElement.clientHeight;
      const scrollHeight = Math.max(
        documentElement.scrollHeight,
        body.scrollHeight
      );

      const scrollRatio = (scrollTop + clientHeight) / scrollHeight;

      if (scrollRatio > 0.95) {
        setPinWrapper({
          ...pinWrapper,
          prevItems: prevItems + 10,
        });
      }
    };

    isData && window.addEventListener('scroll', debounce(onScroll, 500));

    return () => {
      window.removeEventListener('scroll', debounce(onScroll, 500));
    };
  }, [isData, pinWrapper]);

  return (
    <>
      <S.RelatedPin>관련된 핀 더보기</S.RelatedPin>
      <S.ImgWrapper>
        {pinWrapper.pinDatas.map((item, idx) => {
          return (
            <S.PinItem key={idx}>
              <S.PinImg src={item.url} />
            </S.PinItem>
          );
        })}
      </S.ImgWrapper>
    </>
  );
};

export default PinImgWrapper;
