import styled from 'styled-components';

import { ReactComponent as Arrow } from '../../../../assets/Icon-arrow.svg';
import { ReactComponent as RightArrow } from '../../../../assets/Icon-Right-Arrow.svg';
import { ReactComponent as Ellipsis } from '../../../../assets/Icon-Ellipsis.svg';

export const HoverWrap = styled.button`
  ${({ theme }) => theme.variables.flex('', 'center', 'center')}
  width: ${({ width }) => width || '24px'};
  height: ${({ height }) => height || '24px'};
  font-weight: 700;
  cursor: pointer;
  border: none;
  background-color: ${({ changeState }) =>
    changeState === 'no' ? '#ffffff' : changeState === 'yes' && '#e60023'};

  color: ${({ changeState }) =>
    changeState === 'no' ? '#000000' : changeState === 'yes' && '#ffffff'};

  &:hover {
    background-color: ${({ changeState }) =>
      changeState === 'no'
        ? 'rgb(225, 225, 225)'
        : changeState === 'yes' && '#eb3450'};
    cursor: pointer;
  }
`;

export const ReviewCounter = styled.div`
  ${({ theme }) => theme.variables.flex('', '', 'center')};
  margin-top: 40px;
  font-size: 20px;
  font-weight: 600;
`;

export const ReviewCount = styled.span`
  margin: 0 4px;
`;

export const ReviewMoreDownBtn = styled(Arrow)`
  width: 20px;
  height: 20px;
  background-color: #fff;
`;

export const ReviewMoreRightBtn = styled(RightArrow)`
  width: 20px;
  height: 20px;
  background-color: #fff;
`;

export const ReviewWrapper = styled.ul`
  margin-top: 12px;
`;

export const ReviewSize = styled.li`
  width: 100%;
`;

export const ReviewItem = styled.div`
  display: flex;
  margin-bottom: 12px;
`;

export const ReviewAuthorImg = styled.img.attrs({
  src: 'https://i.pinimg.com/75x75_RS/78/f3/ae/78f3aeae6f7f23bf464950eccbee8301.jpg',
  alt: '로고 이미지',
})`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const ReviewContent = styled.p`
  margin-left: 8px;
`;

export const ReviewAuthorName = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

export const ReviewAuthorTalk = styled.span`
  margin-left: 8px;
  font-weight: 400;
`;

export const ReviewMoreFunction = styled.div`
  ${({ theme }) => theme.variables.flex('', 'space-between', 'center')};
  margin-top: 4px;
  width: 50%;
  font-size: 14px;
  color: #767676;
`;

export const CreateReviewDate = styled.span``;

export const ReviewResponse = styled.span`
  cursor: pointer;
`;

export const ReviewLikeBtn = styled.span`
  cursor: pointer;
`;

export const ReviewMoreBtn = styled(Ellipsis)`
  width: 14px;
  height: 14px;
  path {
    fill: #767676;
  }
`;

export const WriteReviewContent = styled.div`
  ${({ theme }) => theme.variables.flex('', '', '')};
  margin-top: 48px;
`;

export const AuthorImg = styled.img.attrs({
  src: 'https://i.pinimg.com/75x75_RS/78/f3/ae/78f3aeae6f7f23bf464950eccbee8301.jpg',
  alt: '로고 이미지',
})`
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

export const WriteReviewInputBox = styled.div`
  margin-left: 12px;
  padding: 12px 8px;
  width: 100%;
  border: 1px solid #cdcdcd;
  border-radius: 24px;
`;

export const WriteReviewInput = styled.textarea`
  width: 100%;
  height: ${({ isSelectInput }) => (isSelectInput ? 'auto' : '24px')};
  font-size: 16px;
  border: none;
  outline: none;
  resize: none;
  overflow: hidden;
`;

export const ReviewBtnWrapper = styled.div`
  ${({ theme }) => theme.variables.flex('', 'flex-end', '')};
  margin-top: 24px;
`;
