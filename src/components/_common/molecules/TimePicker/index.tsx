import { useState } from 'react';
import { generateHours, generateMinutes } from '@utils/timeUtils';
import WheelPicker from '@components/_common/atoms/WheelPicker';
import S from './style';

export default function TimePicker() {
  const HOURS = generateHours(10);
  const MINUTES = generateMinutes(5);

  const [hourIndex, setHourIndex] = useState<number>(0);
  const [minuteIndex, setMinuteIndex] = useState<number>(0);

  return (
    <S.PickerContainer>
      <WheelPicker
        label='시간'
        items={HOURS}
        selectedIndex={hourIndex}
        updateIndex={setHourIndex}
      />
      <S.Colon>:</S.Colon>
      <WheelPicker
        label='분'
        items={MINUTES}
        selectedIndex={minuteIndex}
        updateIndex={setMinuteIndex}
      />
    </S.PickerContainer>
  );
}
