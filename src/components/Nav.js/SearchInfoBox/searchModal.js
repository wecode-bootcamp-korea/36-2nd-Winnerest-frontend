import * as S from './searchModalStyle';

const SearchModal = ({ isSearch, onSetIsSearch }) => {
  return (
    <S.SearchInfoBox isSearch={isSearch}>
      <S.CloseBtn onClick={() => onSetIsSearch(false)} />
      <S.SearchInfoUser>
        <S.UserProfile />
        <span className="userName">Pulan</span>
      </S.SearchInfoUser>
      <S.SearchInfoUser>
        <S.UserProfile />
        <span className="userName">Pulan</span>
      </S.SearchInfoUser>
      <S.SearchInfoUser>
        <S.UserProfile />
        <span className="userName">Pulan</span>
      </S.SearchInfoUser>
      <S.SearchInfoUser>
        <S.UserProfile />
        <span className="userName">Pulan</span>
      </S.SearchInfoUser>
    </S.SearchInfoBox>
  );
};

export default SearchModal;
