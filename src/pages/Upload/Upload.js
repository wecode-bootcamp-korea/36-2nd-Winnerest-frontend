import React from 'react';
import UploadBoxs from './UploadBox/UploadBoxs';
import styled from 'styled-components';

const Upload = () => {
  return (
    <UploadBackGround>
      <BackgroundDiv>
        <UploadBoxs />
      </BackgroundDiv>
    </UploadBackGround>
  );
};

const UploadBackGround = styled.div`
  ${({ theme: { variables } }) => variables.absoluteCenter}
  width: 100%;
  height: 100%;
  background-color: ${({ theme: { style } }) => style.backColor};
`;

const BackgroundDiv = styled.div`
  ${({ theme: { variables } }) => variables.flex('column')}
  position: relative;
  top: 150px; /* TODO : nav바 합치고 Top 수치 조정예정*/
  background-color: ${({ theme: { style } }) => style.backColor};
`;

export default Upload;
