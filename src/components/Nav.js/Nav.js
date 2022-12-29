import { useState, useEffect } from 'react';

import * as S from './NavStyle';
import SearchModal from './SearchInfoBox/searchModal';
import SearchModalClose from './SearchModalClose/searchModalClose';

const Nav = () => {
  const [isSearch, setIsSearch] = useState(false);
  const [user, setUser] = useState(false);

  const onSetIsSearch = active => {
    setIsSearch(active);
  };

  const token = localStorage.getItem('accessToken');

  useEffect(() => {
    fetch(`http://localhost:8000/auth`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => setUser(data.data));
  }, [token]);

  return (
    <>
      <S.HeaderContent>
        <S.LeftContent>
          <S.LogoWrapper>
            <S.HoverWrap width="48px" height="48px">
              <S.Logo src="/image/Logo.png" alt="profile" />
            </S.HoverWrap>
          </S.LogoWrapper>
          <S.NavWrapper>
            <S.HomeBtn onClick={() => (window.location.href = '/pins')}>
              홈
            </S.HomeBtn>
            <S.CreateBtn onClick={() => (window.location.href = '/upload')}>
              만들기
            </S.CreateBtn>
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
          <S.HoverWrap
            width="48px"
            height="48px"
            onClick={() => (window.location.href = '/auth')}
          >
            <S.UserProfile src={user.profileUrl} alt="profile" />
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
