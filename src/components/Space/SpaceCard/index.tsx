import { useNavigate } from 'react-router-dom';
import { BsThreeDotsVertical } from 'react-icons/bs';

import { useModalStore } from '@stores/useModalStore';
import { useUserStore } from '@stores/useUserStore';
import useDeleteSpace from '@hooks/space/useDeleteSpace';

import { useDropdown } from '@hooks/utils/useDropdown';

import { SPACE_EDIT_DROPDOWN_LABELS, STEP_INFO } from '@constants/common';
import { ROUTES } from '@constants/path';

import { formatDate } from '@utils/formatDate';

import { SpaceData } from '@customTypes/space';

import UserProfile from '@components/_common/molecules/UserProfile';
import AvatarGroup from '@components/_common/molecules/AvatarGroup';
import DropdownItem from '@components/_common/atoms/DropdownItem';
import ImageTag from '@components/_common/atoms/ImageTag';
import Tag from '@components/_common/atoms/Tag';
import Icon from '@components/_common/atoms/Icon';

import S from './style';

export default function SpaceCard({
  id,
  joinedMe,
  name,
  language,
  totalUserCount,
  createdAt,
  status,
  currentUsers,
}: SpaceData) {
  const navigate = useNavigate();
  const { open } = useModalStore();
  const userId = useUserStore((state) => state.userId);
  const { deleteStudyMutate } = useDeleteSpace();
  const { isOpen, toggle, handleBlur, dropdownRef } = useDropdown();

  const { label: statusLabel, color: statusColor } = STEP_INFO[status];

  const handleCardClick = () => {
    if (joinedMe) {
      navigate(ROUTES.SPACE.ENTER({ codingSpaceId: id }));
      return;
    }

    open('confirm', {
      isSpace: true,
      codingSpaceId: id,
      name,
      navigate: (codingSpaceId: number) => navigate(ROUTES.SPACE.ENTER({ codingSpaceId })),
    });
  };

  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    toggle();
    deleteStudyMutate.mutate(String(id));
  };

  const leader = currentUsers.find((user) => user.role === 'HOST');

  return (
    <S.CardContainer onClick={handleCardClick}>
      <S.Header>
        <UserProfile
          user={leader}
          size='x_sm'
        />

        <S.RightSection>
          <Tag color={statusColor}>{statusLabel}</Tag>

          {leader?.id === userId && (
            <S.DropdownContainer
              ref={dropdownRef}
              onBlur={handleBlur}
            >
              <Icon
                size='md'
                color='950'
                onClick={toggle}
              >
                <BsThreeDotsVertical />
              </Icon>

              {isOpen && (
                <S.DropdownList>
                  {SPACE_EDIT_DROPDOWN_LABELS.map(({ label, color }) => (
                    <DropdownItem
                      key={label}
                      item={label}
                      size='lg'
                      color={color}
                      onClick={handleRemove}
                    />
                  ))}
                </S.DropdownList>
              )}
            </S.DropdownContainer>
          )}
        </S.RightSection>
      </S.Header>

      <S.Body>
        <S.Text>{name}</S.Text>
        <S.Info>
          <ImageTag imageUrl={language.imageUrl} />
          <S.Text>{`최대 인원 : ${totalUserCount}명`}</S.Text>
          <S.Text>{`생성 일자 : ${formatDate(createdAt)}`}</S.Text>
          <AvatarGroup
            users={currentUsers}
            size='sm'
          />
        </S.Info>
      </S.Body>
    </S.CardContainer>
  );
}
