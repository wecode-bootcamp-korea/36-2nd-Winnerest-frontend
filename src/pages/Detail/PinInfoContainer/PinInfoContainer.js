import { useState } from 'react';
import * as S from './PinInfoStyle';

import Button from '../../../components/Button/Button';
import ReviewList from './ReviewList/ReviewList';
import CloseEllipsisContent from './CloseEllipsisContent';

const PinInfoContainer = () => {
  const [isActive, setIsActive] = useState(false);

  //* 클립 보드 복사
  //* const copyUrl = window.location.href;

  const onSetIsActive = active => {
    setIsActive(active);
  };
  return (
    <>
      <S.PinInfoContainer>
        <S.StickyContent>
          <S.LeftContent>
            <S.HoverWrap
              onClick={() => onSetIsActive(!isActive)}
              width="48px"
              height="48px"
            >
              <S.EllipsisBtn />
            </S.HoverWrap>
            <S.EllipsisContent isActive={isActive}>
              <S.EllipsisItem>이미지 다운로드</S.EllipsisItem>
              <S.EllipsisItem>링크 복사</S.EllipsisItem>
            </S.EllipsisContent>
          </S.LeftContent>
          <Button
            children="저장"
            size="large"
            width="60px"
            style={{
              height: '48px',
              fontSize: '16px',
              color: '#ffffff',
              zIndex: '100',
            }}
          />
        </S.StickyContent>
        <S.PinTitle>
          I am a girl who loves life an5D DIY Diamond Embroidery Mounta
        </S.PinTitle>
        <S.PinDesc>
          I am a girl who loves life an5D DIY Diamond Embroidery Mounta I am a
          girl who loves life an5D DIY Diamond Embroidery Mounta I am a girl who
          loves life an5D DIY Diamond Embroidery Mounta I am a girl who loves
          life an5D DIY Diamond Embroidery Mounta
        </S.PinDesc>
        <S.AuthorProfile>
          <S.AuthorProfileLink to="/">
            <S.AuthorImg />
          </S.AuthorProfileLink>
          <S.AuthorInfoWrapper>
            <S.AuthorInfo>
              <S.AuthorProfileLink to="/">Pulan</S.AuthorProfileLink>
              <S.AuthorFollower>팔로워 281명</S.AuthorFollower>
            </S.AuthorInfo>
            <S.FollowerBtn>팔로우</S.FollowerBtn>
          </S.AuthorInfoWrapper>
        </S.AuthorProfile>
        <ReviewList />
      </S.PinInfoContainer>
      <CloseEllipsisContent isActive={isActive} onSetIsActive={onSetIsActive} />
    </>
  );
};

export default PinInfoContainer;
