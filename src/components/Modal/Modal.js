import React, { useEffect } from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import ModalContainer from './ModalContainer';

const Modal = ({ childeren, onClose, propsFunction, isCancel }) => {
  const ousideClose = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const closeModal = onClose;

  useEffect(() => {
    document.body.style = `overflow: hidden`;
    return () => (document.body.style = `overflow: auto`);
  }, []);

  return (
    <ModalContainer>
      <Overlay onClick={ousideClose}>
        <ModalStyle>
          {childeren}
          <BtnBox>
            {isCancel && (
              <Button
                onClick={() => closeModal()}
                width="150px"
                size="medium"
                color="middleGrey"
                hoverColor="hoverGrey"
              >
                닫기
              </Button>
            )}
            <Button
              onClick={() => {
                if (!propsFunction) {
                  return closeModal();
                } else propsFunction();
                closeModal();
              }}
              size="medium"
              width="150px"
            >
              확인
            </Button>
          </BtnBox>
        </ModalStyle>
      </Overlay>
    </ModalContainer>
  );
};

const Overlay = styled.div`
  position: fixed;
  ${({ theme }) => theme.variables.absoluteCenter}
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 888;
`;

const ModalStyle = styled.div`
  ${({ theme }) => theme.variables.absoluteCenter}
  ${({ theme }) => theme.variables.flex('column')}
  width: 400px;
  max-width: 100%;
  height: 200px;
  max-height: 100%;
  background-color: white;
  border-radius: 20px;
  z-index: 999;
`;

const BtnBox = styled.div`
  ${({ theme }) => theme.variables.flex('', 'space-around')}
  width: 400px;
  margin-top: 50px;
`;

export default Modal;
