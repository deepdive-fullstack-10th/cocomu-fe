import { useNavigate } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

import { ROUTES } from '@constants/path';
import { STATUS_ACTIONS, STATUS } from '@constants/space';

import useStartSpace from '@hooks/space/useStartSpace';

import IconButton from '@components/_common/atoms/IconButton';
import Button from '@components/_common/atoms/Button';
import Timer from '@components/_common/atoms/Timer';

import S from './style';

interface SpaceNavbarProps {
  codingSpaceId: string;
  studyId: string;
  status: keyof typeof STATUS_ACTIONS;
  isLeader: boolean;
  name: string;
  timer?: number;
}

export default function SpaceNavbar({ codingSpaceId, studyId, status, isLeader, name, timer }: SpaceNavbarProps) {
  const navigate = useNavigate();
  const { startSpaceMutate } = useStartSpace();
  const actionLabel = STATUS_ACTIONS[status]?.label;

  const handleStart = () => {
    if (status === STATUS.WAITING) {
      startSpaceMutate.mutate({ codingSpaceId, studyId });
    }
  };

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
        {actionLabel && (status !== STATUS.WAITING || isLeader) && (
          <Button
            size='md'
            color='triadic'
            onClick={handleStart}
          >
            {actionLabel}
          </Button>
        )}
      </S.RightSection>
    </S.Container>
  );
}
