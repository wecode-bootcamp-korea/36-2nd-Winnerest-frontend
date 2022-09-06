import * as S from './PinImgWrapperStyle';

const PinImgWrapper = ({ data }) => {
  return (
    <>
      <S.RelatedPin>관련된 핀 더보기</S.RelatedPin>
      <S.ImgWrapper>
        {data.map(item => {
          return (
            <S.PinItem key={item.pinId}>
              <S.PinImg src={item.url} />
            </S.PinItem>
          );
        })}
      </S.ImgWrapper>
    </>
  );
};

export default PinImgWrapper;
