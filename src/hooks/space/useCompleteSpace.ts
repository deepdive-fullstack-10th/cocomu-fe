// import { useNavigate } from 'react-router-dom';
// import { useMutation } from '@tanstack/react-query';

// import spaceApi from '@api/domain/space';
// import { useModalStore } from '@stores/useModalStore';
// import { WAITING_INFO } from '@constants/modal';
// import { Tab } from '@customTypes/space';

// export default function useCompleteSpace() {
//   const navigate = useNavigate();
//   const { open } = useModalStore();

//   const completeSpaceMutate = useMutation({
//     mutationFn: ({ codingSpaceId, tabData }: { codingSpaceId: string; tabData: Tab[] }) =>
//       spaceApi.complete(codingSpaceId, tabData),
//     onSuccess: (codingSpaceId) => {
//       open('waiting', {
//         label: WAITING_INFO.exit.label,
//         description: WAITING_INFO.exit.description,
//         navigate: navigate(WAITING_INFO.exit.navigate(codingSpaceId)),
//       });
//     },
//   });
//   return { completeSpaceMutate };
// }
