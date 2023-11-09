import styled from '@emotion/styled/macro';
import Link from 'next/link';
import React, { ButtonHTMLAttributes } from 'react';

type Props = {
  variant?: 'primary';
  children: React.ReactNode;
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant = 'primary',
  children,
  href,
  ...props
}: Props) {
  if (href) {
    return (
      <Link href={href} passHref>
        <ButtonElement variant={variant} {...props}>
          {children}
        </ButtonElement>
      </Link>
    );
  }
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
