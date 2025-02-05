import S from './style';
import DropdownItem from '../../atoms/DropdownItem';

type programmingLanguage = 'javaScript' | 'python' | 'java' | 'C';
type step = '대기' | '진행' | '피드백' | '종료';

interface DropdownListProps {
  type: 'programmingLanguage' | 'step';
  onSelect: (value: programmingLanguage | step) => void;
}

const options = {
  programmingLanguage: ['javaScript', 'python', 'java', 'C'] as programmingLanguage[],
  step: ['대기', '진행', '피드백', '종료'] as step[],
};

export default function DropdownList({ type, onSelect }: DropdownListProps) {
  return (
    <S.DropdownList>
      {options[type].map((option) => (
        <DropdownItem
          size={type === 'programmingLanguage' ? 'lg' : 'md'}
          color={type === 'programmingLanguage' ? 'black' : 'gray'}
          onClick={() => onSelect(option)}
        >
          {option}
        </DropdownItem>
      ))}
    </S.DropdownList>
  );
}
