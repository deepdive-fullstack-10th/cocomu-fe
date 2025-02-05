import { LANGUAGE_IMAGES } from '../../../../constants/constants';
import S from './style';

interface ImageTagProps {
  name?: string;
}

export default function ImageTag({ name = 'Python' }: ImageTagProps) {
  return <S.ImageTag src={LANGUAGE_IMAGES[name]} />;
}
