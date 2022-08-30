import React, { useState, useRef, useEffect } from 'react';
import TagList from './TagList/TagList';
import * as S from './UploadBoxsStyle';

const UploadBoxs = () => {
  const [isDelete, setIsDelete] = useState(false);
  const [isBoard, setIsBoard] = useState(false);
  const [boardTitle, setBoardTitle] = useState('');
  const [tags, setTags] = useState([]);

  // 추후데이터통신시 보낼 테그 ID

  const textResize = (event, defaultHeight) => {
    const textAreaBox = event.target;
    textAreaBox.style.height = defaultHeight;
    textAreaBox.style.height = textAreaBox.scrollHeight + 'px';
  };

  const toggleDeleteModal = () => {
    setIsDelete(isDelete => !isDelete);
  };

  const toggleBoardModal = () => {
    setIsBoard(isBoard => !isBoard);
  };

  const selectBoardTitle = title => {
    setBoardTitle(title);
    setIsBoard(isBoard => !isBoard);
  };

  const selectTag = tags => {
    setTags(tags);
  };

  const deleteRef = useRef();
  const boardRef = useRef();

  const onClickOutside = e => {
    if (isDelete && !deleteRef.current.contains(e.target)) {
      toggleDeleteModal();
    } else if (isBoard && !boardRef.current.contains(e.target)) {
      toggleBoardModal();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', onClickOutside);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
    };
  });

  return (
    <S.UploadBoxDiv>
      <S.UploadBox>
        <S.UploadBoxContainer>
          <S.UploadHead>
            <S.BackgroundImg onClick={toggleDeleteModal}>
              <S.ImgTag src="/image/more.png" alt="seeMore" />
            </S.BackgroundImg>
            {isDelete && (
              <S.ModalModel ref={deleteRef}>
                <S.DeleteModalContent>삭제</S.DeleteModalContent>
              </S.ModalModel>
            )}

            {isBoard && (
              <S.BoardBox ref={boardRef}>
                <S.BoardText>모든보드</S.BoardText>

                {BOARD_TITLES.map(titles => (
                  <S.UserBox
                    onClick={() => selectBoardTitle(titles.title)}
                    key={titles.id}
                  >
                    <S.ImgTag src="/image/sample.png" alt="sample" />
                    <S.BoardText>{titles.title}</S.BoardText>
                  </S.UserBox>
                ))}

                <S.BoardLine />
                <S.UserBox onClick={toggleBoardModal}>
                  <S.ImgTag src="/image/plus.png" alt="plus" />
                  <S.BoardText> 보드만들기 </S.BoardText>
                  {/* TODO : BoardText => 추후 모달 연결 */}
                </S.UserBox>
              </S.BoardBox>
            )}

            <S.BoardBtn>
              <S.BoardNameBox onClick={toggleBoardModal}>
                <S.BoardName>{boardTitle}</S.BoardName>
                <S.ImgTag src="/image/down-arrow.png" alt="down-arrow" />
              </S.BoardNameBox>
              {!isBoard && <S.SaveBtn>저장</S.SaveBtn>}
            </S.BoardBtn>
          </S.UploadHead>

          <S.UploadBody>
            <S.UploadArea>
              <S.UploadPicture>
                <S.Border>
                  <S.ImgTag src="/image/up-arrow.png" alt="up-arrow" />
                  <S.SpanText>드래그하거나 클릭하여 업로드</S.SpanText>
                </S.Border>
              </S.UploadPicture>
            </S.UploadArea>

            <S.UploadContent>
              <S.UploadUserBox>
                <S.UploadUserProfile>가</S.UploadUserProfile>
                <S.UploadUserName>가나다</S.UploadUserName>
              </S.UploadUserBox>

              <TagList selectTag={tags => selectTag(tags)} />
              <S.InputArea>
                <S.UploadInput
                  placeholder="제목 추가"
                  onKeyUp={e => textResize(e, '55px')}
                  onKeyDown={e => textResize(e, '55px')}
                  maxLength={100}
                />
                <S.Line />
              </S.InputArea>
              <S.InputArea>
                <S.UploadInputContent
                  placeholder="사람들에게 회원님의 핀에 대해 설명해 보세요"
                  onKeyUp={e => textResize(e, '40px')}
                  onKeyDown={e => textResize(e, '40px')}
                  maxLength={200}
                />
                <S.Line />
              </S.InputArea>
            </S.UploadContent>
          </S.UploadBody>
        </S.UploadBoxContainer>
      </S.UploadBox>
    </S.UploadBoxDiv>
  );
};

export default UploadBoxs;

const BOARD_TITLES = [
  {
    id: 1,
    title: 'test1',
  },
  {
    id: 2,
    title: 'test2',
  },
  {
    id: 3,
    title: 'test3',
  },
];
