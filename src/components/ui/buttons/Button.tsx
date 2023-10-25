import styled from '@emotion/styled/macro';
import React, { ButtonHTMLAttributes } from 'react';

type Props = {
  variant?: 'primary';
  children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant = 'primary',
  children,
  ...props
}: Props) {
  return (
    <ButtonElement variant={variant} {...props}>
      {children}
    </ButtonElement>
  );
}

const ButtonElement = styled.button<Props>`
  background-color: black;
  padding: 20px 0;
  color: #fff;
  width: 100%;
  border-radius: 5px;
`;
