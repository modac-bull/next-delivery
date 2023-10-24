import styled from '@emotion/styled/macro';

type Props = {
  children: React.ReactNode;
};

export default function LayoutDefault({ children }: Props) {
  return <LayoutContainer>{children}</LayoutContainer>;
}

const LayoutContainer = styled.div`
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
`;
