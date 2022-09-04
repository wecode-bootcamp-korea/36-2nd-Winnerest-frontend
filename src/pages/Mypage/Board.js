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
        <S.Img src="https://png.pngtree.com/png-vector/20190215/ourmid/pngtree-vector-folder-icon-png-image_529920.jpg" />
      </S.BoardBoarder>
      <S.BoardName>{boardTitle}</S.BoardName>
      {/* <S.CountOfBoard> 핀 갯수 {pinCount} </S.CountOfBoard> */}
    </S.Board>
  );
};
export default Board;
