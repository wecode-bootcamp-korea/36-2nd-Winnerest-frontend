import styled from 'styled-components';

const CloseEllipsisContent = ({ isActive, onSetIsActive }) => {
  return (
    <CloseContent isActive={isActive} onClick={() => onSetIsActive(false)} />
  );
};

const CloseContent = styled.div`
  position: absolute;
  display: ${({ isActive }) => (isActive ? 'block' : 'none')};
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  height: 100vh;
`;

export default CloseEllipsisContent;
