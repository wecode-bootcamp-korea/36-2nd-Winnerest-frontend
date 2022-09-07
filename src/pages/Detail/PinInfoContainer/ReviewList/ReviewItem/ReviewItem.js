import React, { useEffect, useState } from 'react';
import * as S from '../ReviewListStyle';

const ReviewItem = ({
  id,
  nickname,
  contents,
  created_at,
  likes,
  postReviewLike,
  getReviewData,
}) => {
  const [user, setUser] = useState(false);

  const elapsedTime = date => {
    const start = new Date(date);
    const end = new Date();

    const diff = end - start;

    const times = [
      { time: '분', milliSeconds: 1000 * 60 },
      { time: '시간', milliSeconds: 1000 * 60 * 60 },
      { time: '일', milliSeconds: 1000 * 60 * 60 * 24 },
      { time: '개월', milliSeconds: 1000 * 60 * 60 * 24 * 30 },
      { time: '년', milliSeconds: 1000 * 60 * 60 * 24 * 365 },
    ].reverse();

    for (const value of times) {
      const betweenTime = Math.floor(diff / value.milliSeconds);
      if (betweenTime > 0) {
        return `${betweenTime}${value.time} 전`;
      }
    }

    return '방금 전';
  };

  const token = localStorage.getItem('Token');

  useEffect(() => {
    fetch(`http://10.58.7.159:3000/auth`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => setUser(data.data));
  }, [token]);

  return (
    <S.ReviewSize>
      <S.ReviewItem>
        <S.ReviewAuthorImg src={user.profileUrl} alt="" />
        <S.ReviewContent>
          <S.ReviewAuthorName>{user.nickname}</S.ReviewAuthorName>
          <S.ReviewAuthorTalk>{contents}</S.ReviewAuthorTalk>
          <S.ReviewMoreFunction>
            <S.CreateReviewDate>{elapsedTime(created_at)}</S.CreateReviewDate>
            <S.ReviewResponse>답변</S.ReviewResponse>
            <S.ReviewLikeBtn
              onClick={async () => {
                await postReviewLike(id);
                await getReviewData();
              }}
            >
              좋아요({likes})
            </S.ReviewLikeBtn>
            <S.HoverWrap firstPadding="4px" twoPadding="4px">
              <S.ReviewMoreBtn />
            </S.HoverWrap>
          </S.ReviewMoreFunction>
        </S.ReviewContent>
      </S.ReviewItem>
    </S.ReviewSize>
  );
};

export default ReviewItem;
