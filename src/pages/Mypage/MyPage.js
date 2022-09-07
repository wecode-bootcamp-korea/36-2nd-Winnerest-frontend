import { React, useState, useEffect } from 'react';
import * as S from './MyPageStyle';
import Board from './Board';
import Pins from './Pins';
import Modal from '../../components/Modal/Modal';

const MyPage = () => {
  const [visible, setVisible] = useState(false);
  const [user, setUser] = useState({});
  const [pins, setPins] = useState([]);
  const [boardId, setBoardId] = useState(0);
  const { userId, profileUrl, nickname, board, follower } = user;
  const [isModal, setIsModal] = useState(false);
  const [createBoardName, setCreateBoardName] = useState();

  const token = localStorage.getItem('Token');

  useEffect(() => {
    fetch(`http://10.58.7.159:3000/auth`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => setUser(data.data));
  }, [token]);

  const onClickBoard = async () => {
    await fetch(`http://10.58.7.159:3000/board/${boardId}`, {
      headers: {
        Authorization: token,
      },
    })
      .then(res => res.json())
      .then(data => setPins(data));
  };

  const setBoardName = e => {
    setCreateBoardName(e.target.value);
  };
  const BoardSetting = (
    <>
      <S.CreateBoardTitle>보드 만들기</S.CreateBoardTitle>
      <S.BoardCreateName
        placeholder="보드 이름을 적어주세요"
        onChange={setBoardName}
      />
    </>
  );

  const createBoard = () => {
    fetch(`http://10.58.7.159:3000/board`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({
        title: createBoardName,
      }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message === 'CREATED_BOARD') {
        } else {
          alert('요청이 거부되었습니다.');
        }
      });
  };

  return (
    <S.MyPageLayout>
      <S.Profile>
        <S.ImgDiv>
          <S.ImgBorder>
            <S.ProFileImg src={profileUrl} alt="profileImg" />
          </S.ImgBorder>
        </S.ImgDiv>
        <S.NickName>{nickname}</S.NickName>
        <S.Btn>
          <S.Button>팔로우 {follower}명</S.Button>
        </S.Btn>
      </S.Profile>
      <S.MiddleDiv>
        <S.MyBoard>저장됨</S.MyBoard>
      </S.MiddleDiv>
      <S.MakingPin>
        <S.MakingPinBtnParent>
          <S.MakingPinBtn />
          <S.MakingPinBtnHover
            onClick={() => setIsModal(isModal => !isModal)}
          />
        </S.MakingPinBtnParent>
        {isModal && (
          <Modal
            childeren={BoardSetting}
            onClose={() => setIsModal(isModal => !isModal)}
            propsFunction={createBoard}
          />
        )}
      </S.MakingPin>
      <S.BoardList>
        {board?.map(boardPin => {
          return (
            <Board
              key={boardPin.boardId}
              boardPin={boardPin}
              setVisible={setVisible}
              setBoardId={setBoardId}
              visible={visible}
              onClick={onClickBoard}
              onClickBoard={onClickBoard}
              userId={userId}
            />
          );
        })}
      </S.BoardList>
      {visible && (
        <S.PinOfBoard>
          <S.PinsTitle> 핀들 </S.PinsTitle>
          <S.PinList>
            {pins.map(pin => {
              return <Pins pin={pin} key={pin.pinId} />;
            })}
          </S.PinList>
        </S.PinOfBoard>
      )}
    </S.MyPageLayout>
  );
};

export default MyPage;
