import { useRef, useState } from 'react';

import * as S from './ReviewListStyle';

const ReviewList = () => {
  const [isActive, setIsActive] = useState(false);
  const [isSelectInput, setIsSelectInput] = useState(false);
  const [reviewValue, setReviewValue] = useState('');

  const textRef = useRef();
  const handleResizeHeight = defaultHeight => {
    textRef.current.style.height = defaultHeight;
    textRef.current.style.height = textRef.current.scrollHeight + 'px';
  };

  return (
    <>
      <S.ReviewCounter>
        댓글 <S.ReviewCount>2개</S.ReviewCount>
        <S.HoverWrap
          onClick={() => setIsActive(!isActive)}
          firstPadding="12px"
          twoPadding="12px"
        >
          {isActive ? <S.ReviewMoreDownBtn /> : <S.ReviewMoreRightBtn />}
        </S.HoverWrap>
      </S.ReviewCounter>
      <S.ReviewWrapper>
        {isActive && (
          <>
            <S.ReviewSize>
              <S.ReviewItem>
                <S.ReviewAuthorImg src="" alt="" />
                <S.ReviewContent>
                  <S.ReviewAuthorName>
                    daijoubudeshodattekimiyowaimo
                  </S.ReviewAuthorName>
                  <S.ReviewAuthorTalk>
                    is this real? it's so cool
                  </S.ReviewAuthorTalk>
                  <S.ReviewMoreFunction>
                    <S.CreateReviewDate>1y</S.CreateReviewDate>
                    <S.ReviewResponse>답변</S.ReviewResponse>
                    <S.ReviewLikeBtn>반응</S.ReviewLikeBtn>
                    <S.HoverWrap firstPadding="4px" twoPadding="4px">
                      <S.ReviewMoreBtn />
                    </S.HoverWrap>
                  </S.ReviewMoreFunction>
                </S.ReviewContent>
              </S.ReviewItem>
            </S.ReviewSize>
            <S.WriteReviewContent>
              <S.AuthorImg />
              <S.WriteReviewInputBox>
                <S.WriteReviewInput
                  ref={textRef}
                  onInput={e => {
                    handleResizeHeight('40px');
                    setReviewValue(e.target.value);
                  }}
                  onClick={() => setIsSelectInput(true)}
                  isSelectInput={isSelectInput}
                  placeholder="댓글 추가"
                />
              </S.WriteReviewInputBox>
            </S.WriteReviewContent>
            {isSelectInput && (
              <S.ReviewBtnWrapper>
                <S.HoverWrap
                  width="60px"
                  height="44px"
                  changeState="no"
                  style={{ borderRadius: '24px' }}
                >
                  취소
                </S.HoverWrap>
                <S.HoverWrap
                  width="60px"
                  height="44px"
                  disabled
                  changeState={reviewValue.length > 0 && 'yes'}
                  style={{
                    borderRadius: '24px',
                    marginLeft: '12px',
                  }}
                >
                  완료
                </S.HoverWrap>
              </S.ReviewBtnWrapper>
            )}
          </>
        )}
      </S.ReviewWrapper>
    </>
  );
};

export default ReviewList;
