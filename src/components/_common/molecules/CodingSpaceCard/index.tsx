import UserProfile from '@components/_common/molecules/UserProfile';
import ImageTag from '@components/_common/atoms/ImageTag';
import Tag from '@components/_common/atoms/Tag';
import AvatarGroup from '@components/_common/molecules/AvatarGroup';
import React from 'react';
import { STEP_INFO } from '@constants/constants';
import { formatDate } from '@utils/formatDate';
import { User } from '@customTypes/user';
import S from './style';

type CodingSpaceCardProps = {
  name: string;
  title: string;
  language: string;
  maxParticipant: number;
  createdDate: string;
  status: keyof typeof STEP_INFO;
  users: User[];
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

export default function CodingSpaceCard({
  name,
  title,
  language,
  maxParticipant,
  createdDate,
  status,
  users,
  onClick,
}: CodingSpaceCardProps) {
  const { label, color } = STEP_INFO[status];

  return (
    <S.CodingSpaceCard onClick={onClick}>
      <S.SpaceCardContainer>
        <S.SpaceTopContainer>
          <UserProfile
            name={name}
            size='sm'
          />
          <S.StatusTag>
            <Tag color={color}>{label}</Tag>
          </S.StatusTag>
        </S.SpaceTopContainer>
        <S.SpaceBottomContainer>
          <S.Title>{title}</S.Title>
          <ImageTag name={language} />
          <S.SpacePerson>{`최대 인원 : ${maxParticipant}`}</S.SpacePerson>
          <S.CreatedDate>{`생성 일자 : ${formatDate(createdDate)}`}</S.CreatedDate>
          <AvatarGroup
            users={users}
            size='sm'
          />
        </S.SpaceBottomContainer>
      </S.SpaceCardContainer>
    </S.CodingSpaceCard>
  );
}
