import { useOutletContext } from 'react-router-dom';
import { useDraggable } from '@hooks/utils/useDraggable';
import AvatarGroup from '@components/_common/molecules/AvatarGroup';
import { SpaceOutletProps } from '@customTypes/space';
import SpaceRunner from '../SpaceRunner';

import S from './style';

const User = [
  {
    id: 1,
    nickName: '코코1',
    profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
  },
  {
    id: 2,
    nickName: '코코2',
    profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
  },
  {
    id: 3,
    nickName: '코코3',
    profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
  },
  {
    id: 4,
    nickName: '코코4',
    profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
  },
];

export default function SpaceWaiting() {
  const outletProps = useOutletContext<SpaceOutletProps>();

  const {
    value: height,
    containerRef,
    handleMouseDown,
  } = useDraggable({
    direction: 'y',
    initialValue: 70,
    min: 10,
    max: 90,
    threshold: 5,
  });

  return (
    <S.Container ref={containerRef}>
      <S.ActiveUsersContainer height={height}>
        <AvatarGroup
          users={User}
          size='lg'
        />
        <S.UserCount>{`${User.length}${' '}/${' '}${outletProps.totalUserCount}`}</S.UserCount>
      </S.ActiveUsersContainer>

      <S.ResizablePanel>
        <S.ResizeButton onMouseDown={handleMouseDown} />
      </S.ResizablePanel>

      <S.RunnerContainer>
        <SpaceRunner />
      </S.RunnerContainer>
    </S.Container>
  );
}
