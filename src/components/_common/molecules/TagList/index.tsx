import Tag from '@components/_common/atoms/Tag';
import { TagColor } from '@components/_common/atoms/Tag/style';
import S from './style';

interface TagListProps {
  items: string[];
  color?: TagColor;
}

export default function TagList({ items, color }: TagListProps) {
  return (
    <S.ListContainer>
      {items.map((item) => (
        <Tag
          key={item}
          color={color}
        >
          {item}
        </Tag>
      ))}
    </S.ListContainer>
  );
}
