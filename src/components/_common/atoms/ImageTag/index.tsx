import S from './style';

interface ImageTagProps {
  name?: string;
}

const IMAGE_MAP: Record<string, string> = {
  Python: 'https://holaworld.io/images/languages/python.png',
  JavaScript: 'https://holaworld.io/images/languages/javascript.png',
  Java: 'https://holaworld.io/images/languages/java.png',
};

export default function ImageTag({ name = 'Python' }: ImageTagProps) {
  return <S.ImageTag src={IMAGE_MAP[name]} />;
}
