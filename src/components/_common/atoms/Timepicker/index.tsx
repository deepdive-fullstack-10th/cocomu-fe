import { useState } from 'react';
import S from './style';

type wheelProps = {
  e: React.WheelEvent;
  setter: React.Dispatch<React.SetStateAction<number>>;
  maxLength: number;
};

export default function TimePicker() {
  const HOURS = [...Array(10)].map((_, i) => `0${i}`);
  const MINUTES = [...Array(60)].map((_, i) => (i < 10 ? `0${i}` : `${i}`)).filter((m) => Number(m) % 5 === 0);
  const [hourIndex, setHourIndex] = useState<number>(0);
  const [minuteIndex, setMinuteIndex] = useState<number>(0);

  const handleWheel = ({ e, setter, maxLength }: wheelProps) => {
    if (e.deltaY < 0) {
      setter((prev) => (prev - 1 + maxLength) % maxLength);
    } else if (e.deltaY > 0) {
      setter((prev) => (prev + 1) % maxLength);
    }
  };

  return (
    <S.PickerContainer>
      <S.Column>
        <S.Label>시간</S.Label>
        <S.SwipeWrapper onWheel={(e) => handleWheel({ e, setter: setHourIndex, maxLength: HOURS.length })}>
          {[-1, 0, 1].map((offset) => {
            const index = (hourIndex + offset + HOURS.length) % HOURS.length;
            return (
              <S.Item
                key={index}
                selected={offset === 0}
                onClick={() => setHourIndex(index)}
              >
                {HOURS[index]}
              </S.Item>
            );
          })}
        </S.SwipeWrapper>
      </S.Column>

      <S.Colon>:</S.Colon>

      <S.Column>
        <S.Label>분</S.Label>
        <S.SwipeWrapper onWheel={(e) => handleWheel({ e, setter: setMinuteIndex, maxLength: MINUTES.length })}>
          {[-1, 0, 1].map((offset) => {
            const index = (minuteIndex + offset + MINUTES.length) % MINUTES.length;
            return (
              <S.Item
                key={index}
                selected={offset === 0}
                onClick={() => setMinuteIndex(index)}
              >
                {MINUTES[index]}
              </S.Item>
            );
          })}
        </S.SwipeWrapper>
      </S.Column>
    </S.PickerContainer>
  );
}
