import styled from '@emotion/styled';
import { css, Theme } from '@emotion/react';

const commonTextStyle = (theme: Theme) => css`
  ${theme.font.heading[100]};
  color: ${theme.color.gray[900]};
`;

const SpaceCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  border: 2px solid ${({ theme }) => theme.color.gray[600]};
  border-radius: 2.5rem;

  cursor: pointer;
  transition-property: transform;

  &:hover {
    transform: translateY(5%);
  }
`;

const SpaceTopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 1rem;
`;

const SpaceUserContainer = styled.div`
  display: flex;
  float: left;
`;

const StatusTag = styled.div`
  float: right;
`;

const SpaceBottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 2rem;
  gap: 1rem;

  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
`;

const Title = styled.div`
  padding: 1rem;
  width: 40%;
`;

const SpacePerson = styled.div`
  padding: 1rem;
`;

const CreatedDate = styled.div`
  padding: 1rem;
`;

const AvatarGroup = styled.div`
  padding: 1rem;
`;

const CodingSpaceCard = styled.div`
  ${({ theme }) => commonTextStyle(theme)}
`;

const S = {
  CodingSpaceCard,
  SpaceCardContainer,
  SpaceTopContainer,
  SpaceUserContainer,
  StatusTag,
  SpaceBottomContainer,
  Title,
  SpacePerson,
  CreatedDate,
  AvatarGroup,
};

export default S;
