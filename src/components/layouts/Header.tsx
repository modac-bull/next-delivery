import { css } from '@emotion/react';
import styled from '@emotion/styled/macro';

import { colors, variables } from '@/styles/variables';

type Props = {
  title: string;
  leftActions?: React.ReactNode;
  rightActions?: React.ReactNode;
};

export default function Header({ title, leftActions, rightActions }: Props) {
  const hasActions = !!(leftActions || rightActions);

  return (
    <HeaderContainer hasActions={hasActions}>
      <LeftActions>{leftActions}</LeftActions>
      <Title>{title}</Title>
      <RightActions>{rightActions}</RightActions>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div<{ hasActions: boolean }>`
  display: flex;
  align-items: center;
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  padding: 0 ${variables['gutter-m']};
  max-width: ${variables['max-width']};
  height: ${variables['header-height']};
  margin: 0 auto;
  background-color: ${colors.bg};
  color: #fff;
  z-index: 99;
  ${({ hasActions }) =>
    hasActions &&
    css`
      justify-content: space-between;
    `}
`;

const Title = styled.h1`
  display: -webkit-box !important;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  flex: 1;
  text-align: center;
`;

const LeftActions = styled.div`
  flex: 0 0 76px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 8px;
`;

const RightActions = styled.div`
  flex: 0 0 76px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 8px;
`;
