import styled from 'styled-components';

export const MyPageLayout = styled.div`
  width: 100vw;
  margin-top: 220px;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 60px;
`;

export const ImgDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
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
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 6px;
`;

export const KakaoId = styled.h2`
  font-size: 14px;
  color: #767676;
  margin-bottom: 10px;
`;

export const Following = styled.h3`
  font-size: 16px;
  margin-bottom: 20px;
  margin-bottom: 50px;
`;

export const Btn = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  height: 50px;
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
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  text-align: center;
  height: 48px;
  margin: 13px 30px 50px;
`;

export const MakingPinBtn = styled.img.attrs({
  src: 'https://cdn-icons-png.flaticon.com/512/992/992651.png',
})`
  height: 45px;
  width: auto;
  &:hover {
    cursor: pointer;
  }
`;

export const MakingPinBtnHover = styled.img.attrs({
  src: 'https://cdn-icons-png.flaticon.com/512/3416/3416075.png',
})`
  height: 45px;
  width: auto;
  display: none;
  &:hover {
    cursor: pointer;
  }
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
  &:hover {
    cursor: pointer;
  }
`;

export const BoardBoarder = styled.div`
  width: 245px;
  height: 155px;
  border-radius: 10%;
  overflow: hidden;
`;

export const BoardImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const BoardName = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin: 10px;
`;

export const CountOfBoard = styled.div`
  font-size: 12px;
  margin-left: 10px;
`;

export const PinOfBoard = styled.div`
  width: 100vw;
  border-top: 1px solid #ababab;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  height: 100%;
  margin-top: 3px;
`;

export const PinsTitle = styled.div`
  width: 100%;
  height: 96px;
  margin-left: 20px;
  display: flex;
  align-items: center;
  font-size: 20px;
`;

export const Pins = styled.div`
  margin: 20px 100px;
  max-width: 1440px;
  column-count: 6;
  column-gap: 1em;
`;

export const Pin = styled.div`
  margin-bottom: 5px;
  max-height: auto;
`;

export const PinsBoarder = styled.div`
  width: 150px;
  max-height: 240px;
  border-radius: 20px;
  overflow: hidden;
`;
