import UserProfile from '@components/_common/molecules/UserProfile';
import ImageTag from '@components/_common/atoms/ImageTag';
import Tag from '@components/_common/atoms/Tag';
import React from 'react';
import S from './style';

type CodingSpaceCardProps = {
  name: string;
  title: string;
  language: string;
  maxParticipant: number;
  createdDate: string;
  status: string;
  participants: number;
  onClick: React.MouseEventHandler<HTMLDivElement>;
};

export default function CodingSpaceCard({
  name,
  title,
  language,
  maxParticipant,
  createdDate,
  status,
  participants,
  onClick,
}: CodingSpaceCardProps) {
  return (
    <S.CodingSpaceCard onClick={onClick}>
      <S.SpaceCardContainer>
        <S.SpaceTopContainer>
          <UserProfile
            name={name}
            size='sm'
          />
          <S.StatusTag>
            <Tag color='triadic'>{status}</Tag>
          </S.StatusTag>
        </S.SpaceTopContainer>
        <S.SpaceBottomContainer>
          <S.Title>{title}</S.Title>
          <ImageTag name={language} />
          <S.SpacePerson>{`최대 인원 : ${maxParticipant}`}</S.SpacePerson>
          <S.CreatedDate>{`생성 일자 : ${createdDate}`}</S.CreatedDate>
          <S.AvatarGroup>{participants}</S.AvatarGroup>
        </S.SpaceBottomContainer>
      </S.SpaceCardContainer>
    </S.CodingSpaceCard>
  );
}
