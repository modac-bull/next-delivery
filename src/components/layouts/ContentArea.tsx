import styled from '@emotion/styled/macro';

import { variables } from '@/styles/variables';

type Props = {
  children: React.ReactNode;
};

export default function ContentArea({ children }: Props) {
  return <ContentAreaContainer>{children}</ContentAreaContainer>;
}

const ContentAreaContainer = styled.div`
  padding: calc(${variables['header-height']}) 0;
`;
