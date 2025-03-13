import { BsThreeDotsVertical } from 'react-icons/bs';

import { useDropdown } from '@hooks/utils/useDropdown';
import { useUserStore } from '@stores/useUserStore';
import useDeleteSpace from '@hooks/space/useDeleteSpace';

import UserProfile from '@components/_common/molecules/UserProfile';
import DropdownItem from '@components/_common/atoms/DropdownItem';
import Tag from '@components/_common/atoms/Tag';
import Icon from '@components/_common/atoms/Icon';

import { SPACE_EDIT_DROPDOWN_LABELS, STEP_INFO } from '@constants/common';

import S from './style';

interface SpaceCardHeaderProps {
  id: number;
  leader?: { id: number; nickname: string; profileImageUrl: string };
  status: string;
}

export default function SpaceCardHeader({ id, leader, status }: SpaceCardHeaderProps) {
  const userId = useUserStore((state) => state.userId);
  const { deleteStudyMutate } = useDeleteSpace();
  const { isOpen, toggle, handleBlur, dropdownRef } = useDropdown();

  const { label: statusLabel, color: statusColor } = STEP_INFO[status];

  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    toggle();
    deleteStudyMutate.mutate(String(id));
  };

  return (
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
  );
}
