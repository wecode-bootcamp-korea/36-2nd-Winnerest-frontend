import styled from 'styled-components';

export const SearchInfoBox = styled.div`
  display: ${({ isSearch }) => (isSearch ? 'block' : 'none')};
  position: absolute;
  top: calc(100% + 12px);
  left: 0;
  width: 100%;
  max-height: 50vh;
  background-color: #ffffff;
  z-index: 100;
`;

export const SearchInfoUser = styled.div`
  ${({ theme }) => theme.variables.flex('', '', 'center')};
  padding: 8px 0;

  &:hover {
    background-color: rgb(225, 225, 225);
  }
`;

export const UserProfile = styled.img.attrs({
  src: 'https://i.pinimg.com/75x75_RS/78/f3/ae/78f3aeae6f7f23bf464950eccbee8301.jpg',
  alt: '유저 프로필',
})`
  width: 40px;
  height: 40px;
  margin: 0 16px 0 20px;
  border-radius: 50%;
  cursor: pointer;
`;

export const CloseBtn = styled.div`
  position: absolute;
  z-index: 1000;
  top: -20%;
  right: 1%;
  width: 1.5rem;
  height: 1.5rem;
  background-color: #000;
  border-radius: 50%;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    top: 5px;
    left: 10px;
    height: 15px;
    width: 2px;
    background-color: #ffffff;
    transform: rotate(45deg);
  }
  &:after {
    content: '';
    position: absolute;
    top: 5px;
    left: 10px;
    height: 15px;
    width: 2px;
    background-color: #ffffff;
    transform: rotate(-45deg);
  }
`;
