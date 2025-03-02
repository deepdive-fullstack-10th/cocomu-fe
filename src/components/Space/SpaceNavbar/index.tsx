import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

import { ROUTES } from '@constants/path';
import { STATUS_ACTIONS } from '@constants/space';

import IconButton from '@components/_common/atoms/IconButton';
import Button from '@components/_common/atoms/Button';
import Timer from '@components/_common/atoms/Timer';

import S from './style';

interface SpaceNavbarProps {
  studyId?: string;
  status: keyof typeof STATUS_ACTIONS;
  name: string;
  timer?: number;
  onAction?: () => void;
}

export default function SpaceNavbar({ studyId, status, timer, name, onAction }: SpaceNavbarProps) {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.LeftSection>
        <IconButton
          content='돌아가기'
          align='center'
          color='none'
          onClick={() => navigate(ROUTES.STUDY.DETAIL({ studyId }))}
        >
          <BsArrowLeft />
        </IconButton>
        <S.Name>{name}</S.Name>
      </S.LeftSection>
      <S.RightSection>
        {timer && <Timer timer={timer} />}
        {STATUS_ACTIONS[status]?.label && (
          <Button
            size='md'
            color='triadic'
            onClick={onAction}
          >
            {STATUS_ACTIONS[status].label}
          </Button>
        )}
      </S.RightSection>
    </S.Container>
  );
}
