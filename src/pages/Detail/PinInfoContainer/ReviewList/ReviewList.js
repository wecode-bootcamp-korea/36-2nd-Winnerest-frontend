import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import * as S from './ReviewListStyle';
import ReviewItem from './ReviewItem/ReviewItem';

const ReviewList = ({ reviewCount }) => {
  const [isStateObj, setIsStateObj] = useState({
    isReviewMore: false,
    isSelectInput: false,
    isGetReviewData: true,
    reviewValue: '',
  });
  const [getReviews, setGetReviews] = useState([]);

  const params = useParams();
  const textRef = useRef(null);

  const getReviewData = async () => {
    try {
      const res = await axios.get(
        `http://10.58.2.200:3000/reviews/pin/${params.id}`,
        {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImV4cCI6MTY2MjY3MzQ5NSwiaWF0IjoxNjYyMzEzNDk1fQ.9NOQvYex5iImwlj02CZSYLrHYf-oGCU4cH1k0RR4pF8',
          },
        }
      );
      const { data } = res;
      setGetReviews(data.reviewList);
    } catch (err) {
      throw new Error(err);
    }
  };

  const postReviewData = async () => {
    try {
      await axios.post(
        `http://10.58.2.200:3000/reviews/${params.id}`,
        {
          contents: isStateObj.reviewValue,
        },
        {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImV4cCI6MTY2MjY3MzQ5NSwiaWF0IjoxNjYyMzEzNDk1fQ.9NOQvYex5iImwlj02CZSYLrHYf-oGCU4cH1k0RR4pF8',
          },
        }
      );
    } catch (err) {
      throw new Error(err);
    }
  };

  const postReviewLike = async id => {
    try {
      await axios.post(
        `http://10.58.2.200:3000/reviews/${id}/like`,
        {
          reviewId: id,
        },
        {
          headers: {
            Authorization:
              'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImV4cCI6MTY2MjY3MzQ5NSwiaWF0IjoxNjYyMzEzNDk1fQ.9NOQvYex5iImwlj02CZSYLrHYf-oGCU4cH1k0RR4pF8',
          },
        }
      );
    } catch (err) {
      throw new Error(err);
    }
  };

  const handleReviewMoreBtn = () => {
    setIsStateObj({
      ...isStateObj,
      isReviewMore: !isStateObj.isReviewMore,
      isGetReviewData: false,
    });

    if (isStateObj.isGetReviewData) {
      getReviewData();
    }
  };

  const handleResizeHeight = defaultHeight => {
    textRef.current.style.height = defaultHeight;
    textRef.current.style.height = textRef.current.scrollHeight + 'px';
  };

  const reviewInputChange = e => {
    handleResizeHeight('40px');
    e.target.value.length <= 1 &&
      setIsStateObj({
        ...isStateObj,
        reviewValue: textRef.current.value,
      });
  };

  const closeReviewInput = () => {
    setIsStateObj({
      ...isStateObj,
      isSelectInput: false,
      reviewValue: '',
    });
    handleResizeHeight('20px');
    textRef.current.value = '';
  };

  return (
    <>
      <S.ReviewCounter>
        댓글 <S.ReviewCount>{reviewCount}개</S.ReviewCount>
        <S.HoverWrap
          onClick={() => handleReviewMoreBtn()}
          firstPadding="12px"
          twoPadding="12px"
        >
          {isStateObj.isReviewMore ? (
            <S.ReviewMoreDownBtn />
          ) : (
            <S.ReviewMoreRightBtn />
          )}
        </S.HoverWrap>
      </S.ReviewCounter>
      <S.ReviewWrapper>
        {isStateObj.isReviewMore && (
          <>
            {getReviews.map(item => (
              <ReviewItem
                key={item.id}
                {...item}
                postReviewLike={postReviewLike}
                getReviewData={getReviewData}
              />
            ))}
            <S.WriteReviewContent>
              <S.AuthorImg />
              <S.WriteReviewInputBox>
                <S.WriteReviewInput
                  ref={textRef}
                  onChange={e => reviewInputChange(e)}
                  onClick={() =>
                    setIsStateObj({
                      ...isStateObj,
                      isSelectInput: true,
                    })
                  }
                  isSelectInput={isStateObj.isSelectInput}
                  placeholder="댓글 추가"
                />
              </S.WriteReviewInputBox>
            </S.WriteReviewContent>
            {isStateObj.isSelectInput && (
              <S.ReviewBtnWrapper>
                <S.HoverWrap
                  width="60px"
                  height="44px"
                  changeState="no"
                  onClick={() => closeReviewInput()}
                  style={{ borderRadius: '24px' }}
                >
                  취소
                </S.HoverWrap>
                <S.HoverWrap
                  width="60px"
                  height="44px"
                  changeState={isStateObj.reviewValue.length > 0 && 'yes'}
                  onClick={async () => {
                    setIsStateObj({
                      ...isStateObj,
                      reviewValue: textRef.current.value,
                      isGetReviewData: true,
                    });
                    if (isStateObj.reviewValue === textRef.current.value) {
                      await postReviewData();
                      await getReviewData();
                      await closeReviewInput();
                    }
                  }}
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
