import { useState } from 'react';
import { generateHours, generateMinutes } from '@utils/timeUtils';
import WheelPiker from '@components/_common/atoms/WheelPicker';
import S from './style';

type WheelProps = {
  e: React.WheelEvent;
  setter: React.Dispatch<React.SetStateAction<number>>;
  maxLength: number;
};

export default function TimePicker() {
  const HOURS = generateHours(10);
  const MINUTES = generateMinutes(5);

  const [hourIndex, setHourIndex] = useState<number>(0);
  const [minuteIndex, setMinuteIndex] = useState<number>(0);

  const handleWheel = ({ e, setter, maxLength }: WheelProps) => {
    if (e.deltaY < 0) {
      setter((prev) => (prev - 1 + maxLength) % maxLength);
    } else if (e.deltaY > 0) {
      setter((prev) => (prev + 1) % maxLength);
    }
  };

  return (
    <S.PickerContainer>
      <WheelPiker
        label='시간'
        items={HOURS}
        selectedIndex={hourIndex}
        onWheel={(e) => handleWheel({ e, setter: setHourIndex, maxLength: HOURS.length })}
        onClick={setHourIndex}
      />
      <S.Colon>:</S.Colon>
      <WheelPiker
        label='분'
        items={MINUTES}
        selectedIndex={minuteIndex}
        onWheel={(e) => handleWheel({ e, setter: setMinuteIndex, maxLength: MINUTES.length })}
        onClick={setMinuteIndex}
      />
    </S.PickerContainer>
  );
}
