import RadioOption from '../RadioOption';
import S from './style';

interface RadioFieldProps<T extends readonly string[]> {
  name?: string;
  options: T;
  selectedValue?: T[number];
  optionsGap?: string;
  onChange: (value: T[number]) => void;
}

export default function RadioField<T extends readonly string[]>({
  name,
  options,
  selectedValue,
  optionsGap = '4rem',
  onChange,
}: RadioFieldProps<T>) {
  return (
    <S.Container optionsGap={optionsGap}>
      {options.map((option) => (
        <RadioOption
          key={option}
          name={name}
          label={option}
          checked={selectedValue === option}
          onChange={() => onChange(option)}
        />
      ))}
    </S.Container>
  );
}
