// import { useOutletContext } from 'react-router-dom';

// import { useDraggable } from '@hooks/utils/useDraggable';
// import { SpaceOutletProps } from '@customTypes/space';

// import AvatarGroup from '@components/_common/molecules/AvatarGroup';
// import ResizablePanel from '@components/Space/ResizablePanel';
// import ExecutionPanel from '@components/Space/ExecutionPanel';

// import S from './style';

// const User = [
//   {
//     id: 1,
//     nickname: '코코1',
//     profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
//   },
//   {
//     id: 2,
//     nickname: '코코2',
//     profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
//   },
//   {
//     id: 3,
//     nickname: '코코3',
//     profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
//   },
//   {
//     id: 4,
//     nickname: '코코4',
//     profileImageUrl: 'https://cdn.cocomu.co.kr/images/default/profile.png',
//   },
// ];

export default function SpaceWaiting() {
  // const outletProps = useOutletContext<SpaceOutletProps>();

  // const { value: height, containerRef, handleMouseDown } = useDraggable({ direction: 'y', initialValue: 70 });

  return (
    // <S.Container ref={containerRef}>
    //   <S.ActiveUsersContainer height={height}>
    //     <AvatarGroup
    //       users={User}
    //       size='lg'
    //     />
    //     <S.UserCount>{`${User.length} / ${outletProps.totalUserCount}`}</S.UserCount>
    //   </S.ActiveUsersContainer>

    //   <ResizablePanel
    //     direction='x'
    //     onMouseDown={handleMouseDown}
    //   />

    //   <ExecutionPanel disabled />
    // </S.Container>
    <div>SpaceWaiting</div>
  );
}
