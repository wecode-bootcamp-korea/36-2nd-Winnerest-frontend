import styled from 'styled-components';

export const UploadBoxDiv = styled.div`
  ${({ theme: { variables } }) => variables.flex('column')}
  width: 100%;
`;

export const UploadBox = styled.div`
  position: relative;
  width: 880px;
  padding: 40px;
  margin: 20px 0px;
  border-radius: 16px;
  background-color: white;
`;

export const UploadBoxContainer = styled.div`
  ${({ theme: { variables } }) => variables.flex('column')}
`;

export const BackgroundImg = styled.div`
  ${({ theme: { variables } }) => variables.flex('column')}
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme: { style } }) => style.backColor};
  }
  &:active {
    background-color: ${({ theme: { style } }) => style.inputColor};
  }
`;

/* UploadHead */

export const UploadHead = styled.div`
  ${({ theme: { variables } }) => variables.flex('row', 'space-between')}
  width: 100%;
  margin-bottom: 20px;
`;

export const ImgTag = styled.img`
  width: 20px;
  height: 20px;
  margin: 0 10px;
  border-radius: 50%;
  cursor: pointer;
`;

export const BoardNameBox = styled.div`
  ${({ theme: { variables } }) => variables.flex('', 'space-between')}
  cursor: pointer;
`;

export const BoardBtn = styled.div`
  ${({ theme: { variables } }) => variables.flex('row', 'space-between')}
  height: 40px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme: { style } }) => style.inputColor};
  font-size: 15px;
  cursor: pointer;
`;

export const BoardName = styled.div`
  margin: 0 20px;
  cursor: pointer;
`;

export const SaveBtn = styled.button`
  flex: 0 0 auto;
  height: 40px;
  background-color: rgb(230, 0, 35);
  border: none;
  outline: 0px;
  padding: 0px 14px;
  border-radius: 0px 8px 8px 0px;
  pointer-events: auto;
  cursor: pointer;
`;

/* UploadBody */

export const UploadBody = styled.div`
  ${({ theme: { variables } }) => variables.flex('', 'space-around')}
  width:100%;
`;

export const UploadArea = styled.div`
  ${({ theme: { variables } }) => variables.flex()}
  width: 340px;
  height: 540px;
`;

export const UploadPicture = styled.div`
  ${({ theme }) => theme.variables.flex('')}
  width: 340px;
  height: 540px;
  padding: 10px;
  background-color: ${({ theme: { style } }) => style.inputColor};
`;

export const InputPicture = styled.input`
  display: none;
`;

export const PicturePreview = styled.img`
  width: 100%;
  height: 100%;
`;

export const Border = styled.label`
  ${({ theme: { variables } }) => variables.flex('column')}
  display: ${({ isFileImage }) => (isFileImage ? 'none' : 'flex')};
  width: 100%;
  height: 100%;
  border: 3px dashed #e0e0e0;
  cursor: pointer;
`;

export const SpanText = styled.span`
  margin-top: 20px;
  font-size: 15px;
`;

/* UploadContent */

export const UploadContent = styled.div`
  ${({ theme: { variables } }) => variables.flex('column', 'space-around')}
  height: 550px;
  margin-left: 50px;
`;

export const UploadUserBox = styled.div`
  ${({ theme: { variables } }) => variables.flex()}
  padding: 10px;
`;

export const UploadUserProfile = styled.div`
  ${({ theme: { variables } }) => variables.flex()}
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ theme: { style } }) => style.inputColor};
`;

export const UploadUserName = styled.span`
  margin: 0 10px;
  font-size: 15px;
`;

export const InputArea = styled.div`
  ${({ theme: { variables } }) => variables.flex('column')}
`;

export const UploadInput = styled.textarea`
  width: 340px;
  border: none;
  outline: none;
  font-size: 20px;
  font-weight: bold;
  overflow: hidden;
  text-align: center;
  resize: none;
`;

export const UploadInputContent = styled(UploadInput)`
  font-size: 15px;
  font-weight: normal;
`;

export const Line = styled.div`
  width: 340px;
  border: 1px solid;
`;

/* Modal */

export const ModalModel = styled.div`
  ${({ theme: { variables } }) => variables.flex('column')}
  position: absolute;
  width: 150px;
  padding: 10px;
  top: 85px;
  left: 20px;
  background-color: white;
  box-shadow: 0 0 8px rgb(0 0 0 / 10%);
  border-radius: 20px;
  outline: none;
`;

export const DeleteModalContent = styled.div`
  width: 110%;
  text-align: center;
  &:hover {
    background-color: ${({ theme: { style } }) => style.inputColor};
  }
  &:active {
    background-color: white;
  }
`;

/* BoardBox */

export const BoardBox = styled.div`
  ${({ theme: { variables } }) => variables.flex('column')}
  position: absolute;
  width: 180px;
  top: 85px;
  right: 20px;
  padding: 10px;
  background-color: white;
  box-shadow: 0 0 8px rgb(0 0 0 / 10%);
  border-radius: 20px;
  outline: none;
  z-index: 20;
`;

export const UserBox = styled.div`
  ${({ theme: { variables } }) => variables.flex('', 'space-between')}
  width:100%;
  padding: 10px;
  &:hover {
    background-color: ${({ theme: { style } }) => style.inputColor};
  }
  &:active {
    background-color: white;
  }
`;

export const BoardText = styled.div`
  font-size: 13px;
  margin: 10px 0;
`;

export const BoardLine = styled.div`
  border: 0.5px solid;
  width: 100%;
`;

export const CreateBoardTitle = styled.h3`
  font-size: 20px;
`;

export const BoardCreateName = styled.input`
  width: 80%;
  padding: 10px;
  border-radius: 20px;
  border: none;
  margin-top: 30px;
`;
