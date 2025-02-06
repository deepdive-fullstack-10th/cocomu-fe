import S from './style';

export default function LoadingSpinner() {
  return (
    <S.LoadingSpinner>
      <S.Dot delay='0s' />
      <S.Dot delay='0.2s' />
      <S.Dot delay='0.4s' />
    </S.LoadingSpinner>
  );
}
