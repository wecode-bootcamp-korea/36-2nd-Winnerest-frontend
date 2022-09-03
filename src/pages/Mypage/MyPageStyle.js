import styled from 'styled-components';

export const MyPageLayout = styled.div`
  width: 100vw;
  margin-top: 220px;
  overflow-x: hidden;
`;

export const Profile = styled.div`
  justify-content: center;
  text-align: center;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
`;

export const ImgDiv = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
  margin-bottom: 30px;
`;

export const ImgBorder = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 70%;
  overflow: hidden;
`;

export const ProFileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const NickName = styled.h1`
  margin-bottom: 6px;
  font-size: 36px;
  font-weight: 700;
`;

export const KakaoId = styled.h2`
  margin-bottom: 10px;
  font-size: 14px;
  color: #767676;
`;

export const Following = styled.h3`
  margin-bottom: 20px;
  margin-bottom: 50px;
  font-size: 16px;
`;

export const Btn = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`;

export const Button = styled.button`
  width: auto;
  height: 48px;
  background-color: #efefef;
  margin: 0 5px;
  padding: 12px 18px;
  border-radius: 50px;
  font-weight: 700;
  outline: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: rgb(225, 225, 225);
  }
`;

export const MiddleDiv = styled.div`
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
`;

export const MyBoard = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  border-bottom: solid 1px black;
  border-width: 3px;
`;

export const MakingPin = styled.div`
  height: 48px;
  display: flex;
  text-align: center;
  margin: 13px 30px 50px;
  flex-direction: row;
  justify-content: flex-end;
`;

export const MakingPinBtn = styled.img.attrs({
  src: 'https://cdn-icons-png.flaticon.com/512/992/992651.png',
})`
  width: auto;
  height: 45px;
  cursor: pointer;
`;

export const MakingPinBtnHover = styled.img.attrs({
  src: 'https://cdn-icons-png.flaticon.com/512/3416/3416075.png',
})`
  width: auto;
  height: 45px;
  display: none;
  cursor: pointer;
`;

export const MakingPinBtnParent = styled.div`
  &:hover ${MakingPinBtnHover} {
    display: flex;
  }

  &:hover ${MakingPinBtn} {
    display: none;
  }
`;

export const BoardList = styled.div`
  width: 100%;
  height: auto;
  margin: 2px 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Board = styled.div`
  width: 252px;
  height: 234px;
  margin: 3px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  cursor: pointer;
`;

export const BoardBoarder = styled.div`
  width: 245px;
  height: 155px;
  border-radius: 10%;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BoardName = styled.div`
  margin: 10px;
  font-size: 20px;
  font-weight: 600;
`;

export const CountOfBoard = styled.div`
  font-size: 12px;
  margin-left: 10px;
`;

export const PinOfBoard = styled.div`
  width: 100vw;
  height: 100%;
  margin-top: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-top: 1px solid #ababab;
`;

export const PinsTitle = styled.div`
  width: 100%;
  height: 96px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  font-size: 20px;
`;

export const PinList = styled.div`
  max-width: 1440px;
  margin: 20px auto;
  column-count: 5;
  column-gap: 1em;
`;

export const PinsBoarder = styled.div`
  width: 100%;
  display: inline-flex;
  border-radius: 20px;
  margin-bottom: 1rem;
  overflow: hidden;
`;

export const CreateBoardTitle = styled.h3`
  font-size: 20px;
`;

export const BoardCreateName = styled.input`
  width: 80%;
  padding: 10px;
  margin-top: 30px;
  border-radius: 20px;
  border: none;
`;
