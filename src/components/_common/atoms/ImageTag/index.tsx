import { DEFAULT_LANGUAGE_IMAGE } from '@constants/common';
import S from './style';

interface ImageTagProps {
  imageUrl?: string;
}

export default function ImageTag({ imageUrl = DEFAULT_LANGUAGE_IMAGE }: ImageTagProps) {
  return <S.ImageTag src={imageUrl} />;
}
