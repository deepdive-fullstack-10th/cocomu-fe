import S from './style';

interface WheelPickerProps {
  label: string;
  items: string[];
  selectedIndex: number;
  updateIndex: (index: number) => void;
}

export default function WheelPicker({ label, items, selectedIndex, updateIndex }: WheelPickerProps) {
  const handleWheel = (e: React.WheelEvent) => {
    const maxLength = items.length;
    let newIndex = selectedIndex;

    if (e.deltaY < 0) {
      newIndex = (selectedIndex - 1 + maxLength) % maxLength;
    } else if (e.deltaY > 0) {
      newIndex = (selectedIndex + 1) % maxLength;
    }

    updateIndex(newIndex);
  };

  return (
    <S.Column>
      <S.Label>{label}</S.Label>
      <S.SwipeWrapper onWheel={handleWheel}>
        {[-1, 0, 1].map((offset) => {
          const index = (selectedIndex + offset + items.length) % items.length;
          return (
            <S.Item
              key={index}
              selected={offset === 0}
              onClick={() => updateIndex(index)}
            >
              {items[index]}
            </S.Item>
          );
        })}
      </S.SwipeWrapper>
    </S.Column>
  );
}
