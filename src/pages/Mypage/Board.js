import { React } from 'react';
import * as S from './MyPageStyle';

const Board = ({ boardPin, setBoardId, setVisible, visible, onClickBoard }) => {
  const { boardTitle, boardId } = boardPin;

  return (
    <S.Board
      onClick={() => {
        setBoardId(boardId);
        setVisible(!visible);
        onClickBoard();
      }}
    >
      <S.BoardBoarder>
        <S.Img src="https://cdn-icons-png.flaticon.com/512/3503/3503713.png" />
      </S.BoardBoarder>
      <S.BoardName>{boardTitle}</S.BoardName>
      {/* <S.CountOfBoard> 핀 갯수 {pinCount} </S.CountOfBoard> */}
    </S.Board>
  );
};
export default Board;
