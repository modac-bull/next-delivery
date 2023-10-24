import styled from '@emotion/styled/macro';

import { colors, variables } from '@/styles/variables';

type Props = {
  title: string;
  leftAction?: React.ReactNode;
  rightAction?: React.ReactNode;
};

export default function Header({ title, leftAction, rightAction }: Props) {
  return (
    <HeaderContainer>
      <Inner>
        <LeftActions>{leftAction}</LeftActions>
        <Title>{title}</Title>
        <RightActions>{rightAction}</RightActions>
      </Inner>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.div`
  color: #fff;
  background-color: #222;
  height: 50px;
  position: fixed;
  left: 0;
  right: 0;
  width: 100%;
  max-width: ${variables['max-width']};
  margin: 0 auto;
  background-color: $black;
  color: #fff;
  z-index: 900;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${variables['header-height']};
  padding: 0 10px;
`;

const Title = styled.h1``;

const LeftActions = styled.div`
  flex: 0 0 94px;
`;

const RightActions = styled.div`
  display: flex;
  column-gap: 5px;
  i {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #fff;
  }
`;
