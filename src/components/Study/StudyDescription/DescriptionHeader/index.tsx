import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsThreeDotsVertical } from 'react-icons/bs';

import UserProfile from '@components/_common/molecules/UserProfile';
import Icon from '@components/_common/atoms/Icon';
import Button from '@components/_common/atoms/Button';
import DropdownItem from '@components/_common/atoms/DropdownItem';

import { STUDY_EDIT_DROPDOWN_LABELS } from '@constants/common';
import { ROUTES } from '@constants/path';
import { UserData } from '@customTypes/user';
import { useModalStore } from '@stores/useModalStore';

import S from './style';

interface DescriptionHeaderProps {
  isLeader: boolean;
  isStudy: boolean;
  leader: UserData;
  studyId: number;
}

export default function DescriptionHeader({ isLeader, isStudy, leader, studyId }: DescriptionHeaderProps) {
  const navigate = useNavigate();
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const { open } = useModalStore();

  const handleDropdownToggle = () => setDropdownOpen((prev) => !prev);

  const handleItemSelect = (selectedItem: string) => {
    if (selectedItem === STUDY_EDIT_DROPDOWN_LABELS[0].label) {
      navigate(ROUTES.STUDY.EDIT({ studyId }));
    } else if (selectedItem === STUDY_EDIT_DROPDOWN_LABELS[1].label) {
      // TODO: 스터디 삭제 API 호출
    }
    setDropdownOpen(false);
  };

  const handleLeaveClick = () => {
    open('leave', {
      studyId: String(studyId),
      name: leader.nickname,
      navigate: () => navigate(ROUTES.STUDY.LIST()),
    });
  };

  return (
    <S.Header>
      <UserProfile
        user={leader}
        size='md'
      />

      {isLeader ? (
        <S.IconWrapper>
          <Icon
            size='md'
            color='950'
            onClick={handleDropdownToggle}
          >
            <BsThreeDotsVertical />
          </Icon>
          {isDropdownOpen && (
            <S.DropdownList>
              {STUDY_EDIT_DROPDOWN_LABELS.map(({ label, color }) => (
                <DropdownItem
                  key={label}
                  item={label}
                  size='lg'
                  color={color}
                  onClick={() => handleItemSelect(label)}
                />
              ))}
            </S.DropdownList>
          )}
        </S.IconWrapper>
      ) : (
        isStudy && (
          <Button
            color='triadic'
            size='md'
            onClick={handleLeaveClick}
          >
            스터디 나가기
          </Button>
        )
      )}
    </S.Header>
  );
}
