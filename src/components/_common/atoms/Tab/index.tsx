import S, { TabColor } from './style';

interface TabProps {
  color: TabColor;
  name: string;
}

export default function Tab({ color, name }: TabProps) {
  return (
    <S.TabContainer>
      <S.UserName color={color}>{name}</S.UserName>
      <S.Dot color={color} />
    </S.TabContainer>
  );
}
