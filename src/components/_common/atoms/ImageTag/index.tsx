import S from './style';

interface ImageTagProps {
  imageUrl?: string;
}

export default function ImageTag({ imageUrl = 'https://cdn.cocomu.co.kr/images/languages/java.png' }: ImageTagProps) {
  return <S.ImageTag src={imageUrl} />;
}
