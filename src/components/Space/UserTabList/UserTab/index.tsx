import S, { UserTabColor } from './style';

interface UserTabProps {
  color: UserTabColor;
  name: string;
  onClick?: () => void;
}

export default function UserTab({ color, name, onClick }: UserTabProps) {
  return (
    <S.UserTab onClick={onClick}>
      <S.UserName color={color}>{name}</S.UserName>
      <S.Dot color={color} />
    </S.UserTab>
  );
}
