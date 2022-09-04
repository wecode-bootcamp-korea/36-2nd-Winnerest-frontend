import { React, useState } from 'react';
import * as S from './myPageStyle';

const MyPage = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="myPage">
      <S.MyPageLayout>
        <S.Profile>
          <S.ImgDiv>
            <S.ImgBorder>
              <S.ProFileImg
                src="https://studiomeal.com/wp-content/uploads/2020/01/01-00.jpg"
                alt="wow"
              />
            </S.ImgBorder>
          </S.ImgDiv>
          <S.NickName>봉봉</S.NickName>
          <S.KakaoId>@bongbong</S.KakaoId>
          <S.Following>팔로잉 3명</S.Following>
          <S.Btn>
            <S.Button>프로필 수정</S.Button>
            <S.Button>팔로우 하기</S.Button>
          </S.Btn>
        </S.Profile>
        <S.MiddleDiv>
          <S.MyBoard>저장됨</S.MyBoard>
        </S.MiddleDiv>
        <S.MakingPin>
          <S.MakingPinBtnParent>
            <S.MakingPinBtn />
            <S.MakingPinBtnHover />
            {/* 보드 만드는 모달로 가는 버튼 */}
          </S.MakingPinBtnParent>
        </S.MakingPin>
        <S.BoardList>
          <S.Board
            onClick={() => {
              setVisible(true);
            }}
          >
            <S.BoardBoarder>
              <S.BoardImg src="https://cdn.imweb.me/upload/S2017101359e025984d346/bff36a6d2ced4.jpg" />
            </S.BoardBoarder>
            <S.BoardName>BoardName</S.BoardName>
            <S.CountOfBoard>3개</S.CountOfBoard>
          </S.Board>
        </S.BoardList>
        {/* Board 클릭시 pinOfBoard가 나옴 */}
        {visible && (
          <S.PinOfBoard>
            {/* 팀원들과 레이아웃 공유하고자 이미지 그대로 넣었습니다 (월요일에 회의 예정)  */}
            <S.PinsTitle> BoardName 의 핀들 </S.PinsTitle>
            <S.Pins>
              <S.Pin>
                <S.PinsBoarder>
                  <S.BoardImg src="https://cdn.imweb.me/upload/S2017101359e025984d346/bff36a6d2ced4.jpg" />
                </S.PinsBoarder>
              </S.Pin>
              <S.Pin>
                <S.PinsBoarder>
                  <S.BoardImg src="https://cdn.imweb.me/upload/S2017101359e025984d346/bff36a6d2ced4.jpg" />
                </S.PinsBoarder>
              </S.Pin>
              <S.Pin>
                <S.PinsBoarder>
                  <S.BoardImg src="https://cdn.imweb.me/upload/S2017101359e025984d346/bff36a6d2ced4.jpg" />
                </S.PinsBoarder>
              </S.Pin>
              <S.Pin>
                <S.PinsBoarder>
                  <S.BoardImg src="https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1ns1/image/IntgyIl5yyuj19gOcSZQBnH4Yog.JPG" />
                </S.PinsBoarder>
              </S.Pin>
              <S.Pin>
                <S.PinsBoarder>
                  <S.BoardImg src="https://cdn.imweb.me/upload/S2017101359e025984d346/bff36a6d2ced4.jpg" />
                </S.PinsBoarder>
              </S.Pin>
              <S.Pin>
                <S.PinsBoarder>
                  <S.BoardImg src="https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1ns1/image/IntgyIl5yyuj19gOcSZQBnH4Yog.JPG" />
                </S.PinsBoarder>
              </S.Pin>
              <S.Pin>
                <S.PinsBoarder>
                  <S.BoardImg src="https://cdn.imweb.me/upload/S2017101359e025984d346/bff36a6d2ced4.jpg" />
                </S.PinsBoarder>
              </S.Pin>
              <S.Pin>
                <S.PinsBoarder>
                  <S.BoardImg src="https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1ns1/image/IntgyIl5yyuj19gOcSZQBnH4Yog.JPG" />
                </S.PinsBoarder>
              </S.Pin>
              <S.Pin>
                <S.PinsBoarder>
                  <S.BoardImg src="https://cdn.imweb.me/upload/S2017101359e025984d346/bff36a6d2ced4.jpg" />
                </S.PinsBoarder>
              </S.Pin>
              <S.Pin>
                <S.PinsBoarder>
                  <S.BoardImg src="https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/1ns1/image/IntgyIl5yyuj19gOcSZQBnH4Yog.JPG" />
                </S.PinsBoarder>
              </S.Pin>
              <S.Pin>
                <S.PinsBoarder>
                  <S.BoardImg src="https://cdn.imweb.me/upload/S2017101359e025984d346/bff36a6d2ced4.jpg" />
                </S.PinsBoarder>
              </S.Pin>
            </S.Pins>
          </S.PinOfBoard>
        )}
      </S.MyPageLayout>
    </div>
  );
};

export default MyPage;
