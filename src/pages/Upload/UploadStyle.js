import styled from 'styled-components';

export const UploadBackGround = styled.div`
  ${({ theme: { variables } }) => variables.absoluteCenter}
  width: 100vw;
  height: 100vh;
  overflow: scroll;
  background-color: ${({ theme: { style } }) => style.backColor};
`;

export const BackgroundDiv = styled.div`
  ${({ theme: { variables } }) => variables.flex('column')}
  position: relative;
  top: 150px; /* TODO : nav바 합치고 Top 수치 조정예정*/
  overflow: scroll;
`;

export const PreviewPictureBox = styled.div`
  ${({ theme: { variables } }) => variables.flex('column')}
  position: fixed;
  left: 0;
  top: 150px;
  width: 45px;
  z-index: 777;
`;

export const AddBtn = styled.button`
  height: 60px;
  width: 40px;
  margin-bottom: 10px;
  border: none;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0 0 8px rgb(0 0 0 / 10%);
  font-size: 25px;
  outline: none;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme: { style } }) => style.inputColor};
  }
  &:active {
    background-color: white;
  }
`;

export const PreviewPicture = styled.div`
  ${({ theme: { variables } }) => variables.flex('column')}
  height: 60px;
  width: 40px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0 0 8px rgb(0 0 0 / 10%);
  background-color: ${({ theme: { style } }) => style.inputColor};
  cursor: pointer;
`;

export const Line = styled.div`
  width: 100%;
  border: 1px solid;
`;

export const PreviewPictureview = styled.img`
  height: 20px;
  width: 20px;
  cursor: pointer;
`;
