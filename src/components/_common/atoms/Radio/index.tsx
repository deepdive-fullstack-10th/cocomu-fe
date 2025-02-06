import S from './style';

interface RadioProps {
  isChecked: boolean;
  onToggle: (checked: boolean) => void;
  required?: boolean;
  name?: string;
}

export default function Radio({ isChecked, onToggle, required = false, name }: RadioProps) {
  return (
    <S.RadioContainer onClick={() => onToggle(!isChecked)}>
      <S.HiddenRadio
        type='radio'
        checked={isChecked}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => onToggle(e.target.checked)}
        name={name}
        required={required}
      />
      <S.RadioOuter checked={isChecked}>
        <S.RadioInner checked={isChecked} />
      </S.RadioOuter>
    </S.RadioContainer>
  );
}
