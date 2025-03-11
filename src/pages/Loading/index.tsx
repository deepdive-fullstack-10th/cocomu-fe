import S from './style';

export default function Loading() {
  return (
    <S.LoadingContainer>
      <S.LoadingImage
        src='https://cdn.cocomu.co.kr/images/default/Loading.png'
        alt='로딩 이미지'
      />
    </S.LoadingContainer>
  );
}
