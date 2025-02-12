import ImageTag from '@components/_common/atoms/ImageTag';
import S from './style';

interface ImageTagListProps {
  items: string[];
}

export default function ImageTagList({ items }: ImageTagListProps) {
  return (
    <S.ListContainer>
      {items.map((item) => (
        <ImageTag
          key={item}
          name={item}
        />
      ))}
    </S.ListContainer>
  );
}
