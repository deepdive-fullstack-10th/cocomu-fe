import Radio from '@components/_common/atoms/Radio';
import S from './style';

interface RadioOptionProps {
  name?: string;
  label: string;
  checked: boolean;
  onToggle: (value: boolean) => void;
}

export default function RadioOption({ name, label, checked, onToggle }: RadioOptionProps) {
  return (
    <S.Option>
      <Radio
        name={name}
        isChecked={checked}
        onToggle={onToggle}
      />
      <S.Label>{label}</S.Label>
    </S.Option>
  );
}
