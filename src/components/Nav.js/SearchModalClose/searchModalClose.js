import styled from 'styled-components';

const SearchModalClose = ({ isSearch, onSetIsSearch }) => {
  const screenHeight = document.documentElement.scrollHeight;
  return (
    <ModalClose
      screenHeight={screenHeight}
      isSearch={isSearch}
      onClick={() => onSetIsSearch(false)}
    />
  );
};

const ModalClose = styled.div`
  position: absolute;
  display: ${props => (props.isSearch ? 'block' : 'none')};
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ screenHeight }) => screenHeight + 'px'};
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
`;

export default SearchModalClose;
