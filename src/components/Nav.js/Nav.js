import { useState } from 'react';

import * as S from './NavStyle';
import SearchModal from './SearchInfoBox/searchModal';
import SearchModalClose from './SearchModalClose/searchModalClose';

const Nav = () => {
  const [isSearch, setIsSearch] = useState(false);

  const onSetIsSearch = active => {
    setIsSearch(active);
  };

  return (
    <>
      <S.HeaderContent>
        <S.LeftContent>
          <S.LogoWrapper>
            <S.HoverWrap width="48px" height="48px">
              <S.Logo />
            </S.HoverWrap>
          </S.LogoWrapper>
          <S.NavWrapper>
            <S.HomeBtn>홈</S.HomeBtn>
            <S.CreateBtn>만들기</S.CreateBtn>
            <S.HoverWrap>
              <S.MoreBtn />
            </S.HoverWrap>
          </S.NavWrapper>
        </S.LeftContent>
        <S.SearchWrapper isSearch={isSearch}>
          <S.SearchIcon onClick={() => setIsSearch(true)} />
          <S.SearchInput onClick={() => setIsSearch(true)} />
          <SearchModal isSearch={isSearch} onSetIsSearch={onSetIsSearch} />
        </S.SearchWrapper>
        <S.RightContent>
          <S.LogOutBtn>로그아웃</S.LogOutBtn>
          <S.HoverWrap width="48px" height="48px">
            <S.UserProfile />
          </S.HoverWrap>
          <S.HoverWrap>
            <S.MoreBtn />
          </S.HoverWrap>
        </S.RightContent>
      </S.HeaderContent>
      <SearchModalClose isSearch={isSearch} onSetIsSearch={onSetIsSearch} />
    </>
  );
};

export default Nav;
