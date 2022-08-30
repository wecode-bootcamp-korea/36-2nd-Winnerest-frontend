import React, { useState } from 'react';
import * as S from './UploadStyle';
import UploadBoxs from './UploadBox/UploadBoxs';

const Upload = () => {
  const [addUploadBox, setAddUploadBox] = useState([0]);
  const [addPreviewPictureview, setAddPreviewPictureview] = useState([0]);

  const onAddDetailDiv = () => {
    let countArr = [...addUploadBox];
    let countArrPreview = [...addPreviewPictureview];
    let counter = countArr.slice(-1)[0];
    counter += 1;
    countArr.push(counter);
    countArrPreview.push(counter);
    setAddPreviewPictureview(countArrPreview);
    setAddUploadBox(countArr);
  };

  return (
    <>
      <S.PreviewPictureBox>
        <S.AddBtn onClick={onAddDetailDiv}>+</S.AddBtn>
        <S.Line />
        {addPreviewPictureview.map(i => (
          <S.PreviewPicture key={i}>
            <S.PreviewPictureview src="/image/image.png" alt="preview" />
          </S.PreviewPicture>
        ))}
      </S.PreviewPictureBox>
      <S.UploadBackGround>
        <S.BackgroundDiv>
          {addUploadBox.map(i => (
            <UploadBoxs key={i} />
          ))}
        </S.BackgroundDiv>
      </S.UploadBackGround>
    </>
  );
};

export default Upload;
