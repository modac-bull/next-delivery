import styled from '@emotion/styled/macro';

import { variables } from '@/styles/variables';

type Props = {
  children: React.ReactNode;
};

export default function LayoutDefault({ children }: Props) {
  return <LayoutContainer>{children}</LayoutContainer>;
}

const LayoutContainer = styled.div`
  width: 100%;
  max-width: ${variables['max-width']};
  margin: 0 auto;
`;
