import styled from '@emotion/styled/macro';
import Link from 'next/link';
import React, { ButtonHTMLAttributes } from 'react';

type Props = {
  variant?: 'primary';
  children: React.ReactNode;
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function ButtonText({
  variant = 'primary',
  children,
  href,
  ...props
}: Props) {
  if (href) {
    return (
      <Link href={href} passHref>
        <ButtonTextElement variant={variant} {...props}>
          {children}
        </ButtonTextElement>
      </Link>
    );
  }
  return (
    <ButtonTextElement variant={variant} {...props}>
      {children}
    </ButtonTextElement>
  );
}

const ButtonTextElement = styled.button<Props>`
  color: #222;
  width: 100%;
  text-decoration: underline;
`;
