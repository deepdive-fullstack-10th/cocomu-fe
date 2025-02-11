import S from './style';

type WheelPikerProps = {
  label: string;
  items: string[];
  selectedIndex: number;
  onWheel: (e: React.WheelEvent) => void;
  onClick: (index: number) => void;
};

export default function WheelPiker({ label, items, selectedIndex, onWheel, onClick }: WheelPikerProps) {
  return (
    <S.Column>
      <S.Label>{label}</S.Label>
      <S.SwipeWrapper onWheel={onWheel}>
        {[-1, 0, 1].map((offset) => {
          const index = (selectedIndex + offset + items.length) % items.length;
          return (
            <S.Item
              key={index}
              selected={offset === 0}
              onClick={() => onClick(index)}
            >
              {items[index]}
            </S.Item>
          );
        })}
      </S.SwipeWrapper>
    </S.Column>
  );
}
