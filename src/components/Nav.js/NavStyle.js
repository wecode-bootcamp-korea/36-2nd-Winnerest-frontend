import styled from 'styled-components';

import { ReactComponent as Search } from '../../assets/Icon-Search.svg';
import { ReactComponent as Arrow } from '../../assets/Icon-arrow.svg';

export const HeaderContent = styled.header`
  top: 0;
  position: fixed;
  ${({ theme }) => theme.variables.flex('', 'space-between', 'center')}
  padding: 0 16px;
  width: 100vw;
  height: 80px;
  z-index: 1000;
  background-color: #ffffff;
`;

export const BasicSize = styled.div`
  ${({ theme }) => theme.variables.flex('', 'center', 'center')}
  width: 60px;
  height: 48px;
  font-weight: 600;
`;

export const HoverWrap = styled.div`
  ${({ theme }) => theme.variables.flex('', 'center', 'center')}
  width: ${({ width }) => width || '24px'};
  height: ${({ height }) => height || '24px'};

  &:hover {
    background-color: rgb(225, 225, 225);
    border-radius: 50%;
  }
`;

export const LeftContent = styled.div`
  ${({ theme }) => theme.variables.flex('', '', 'center')}
`;

export const LogoWrapper = styled.h1`
  ${({ theme }) => theme.variables.flex('', 'center', 'center')}
  width: 48px;
  height: 48px;
  cursor: pointer;
`;

export const Logo = styled.img.attrs({
  src: 'https://i.pinimg.com/75x75_RS/78/f3/ae/78f3aeae6f7f23bf464950eccbee8301.jpg',
  alt: '로고 이미지',
})`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export const NavWrapper = styled.nav`
  ${({ theme }) => theme.variables.flex('', '', 'center')};
`;

export const HomeBtn = styled(BasicSize)`
  background-color: #111111;
  border-radius: 48px;
  color: #ffffff;
  cursor: pointer;
`;

export const CreateBtn = styled(BasicSize)`
  margin-left: 8px;
  cursor: pointer;

  &:hover {
    background-color: rgb(225, 225, 225);
    border-radius: 48px;
  }
`;

export const MoreBtn = styled(Arrow)`
  width: 12px;
  height: 12px;
  cursor: pointer;

  &:hover {
    background-color: rgb(225, 225, 225);
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  ${({ theme }) => theme.variables.flex('', '', 'center')}
  flex: 1;
  height: 48px;
  margin-left: 8px;
  padding: 0 12px;
  background-color: #e9e9e9;
  ${({ isSearch }) => isSearch && 'border: 3px solid rgba(10, 105, 225, 0.5)'};
  border-radius: 24px;

  &:hover {
    background-color: rgb(225, 225, 225);
  }
`;

export const SearchIcon = styled(Search)`
  width: 24px;
  height: 24px;
  path {
    fill: #767676;
  }
`;

export const SearchInput = styled.input.attrs({
  type: 'text',
  placeholder: '검색',
})`
  width: 100%;
  background-color: transparent;
  font-size: 16px;
  border: none;
  outline: none;
`;

export const RightContent = styled.div`
  ${({ theme }) => theme.variables.flex('', '', 'center')}
  margin-left: 24px;
`;

export const LogOutBtn = styled(BasicSize)`
  cursor: pointer;

  &:hover {
    background-color: rgb(225, 225, 225);
    border-radius: 48px;
  }
`;

export const UserProfile = styled.img.attrs({
  src: 'https://i.pinimg.com/75x75_RS/78/f3/ae/78f3aeae6f7f23bf464950eccbee8301.jpg',
  alt: '유저 프로필',
})`
  width: 24px;
  height: 24px;
  margin: 0 16px 0 20px;
  border-radius: 50%;
  cursor: pointer;
`;
