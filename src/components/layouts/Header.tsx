import styled from '@emotion/styled/macro';

import LayoutDefault from '@/components/layouts/LayoutDefault';

import { colors } from '@/styles/variables';

export default function Header() {
  return <HeaderContainer>Header</HeaderContainer>;
}

const HeaderContainer = styled.div`
  color: ${colors.primary};
`;
