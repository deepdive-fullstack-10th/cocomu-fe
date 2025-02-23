import Tag from '@components/_common/atoms/Tag';
import { TagColor } from '@components/_common/atoms/Tag/style';
import S from './style';

interface TagListProps {
  items: string[];
  color?: TagColor;
  onRemove?: (item: string) => void;
}

export default function TagList({ items, color, onRemove }: TagListProps) {
  return (
    <S.ListContainer>
      {items.map((item) => (
        <Tag
          key={item}
          color={color}
          onRemove={() => onRemove(item)}
        >
          {item}
        </Tag>
      ))}
    </S.ListContainer>
  );
}
