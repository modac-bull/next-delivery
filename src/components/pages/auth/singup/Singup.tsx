import styled from '@emotion/styled/macro';
import React, { InputHTMLAttributes, useRef } from 'react';

import ContentArea from '@/components/layouts/ContentArea';
import Header from '@/components/layouts/Header';
import Button from '@/components/ui/buttons/Button';
import { BackButton, CartButton, LikeButton } from '@/components/ui/header';

export default function Signup() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <Header
        title="회원가입"
        leftActions={<BackButton />}
        rightActions={
          <>
            <LikeButton />
            <CartButton />
          </>
        }
      />

      <ContentArea>
        <Section>
          <form
            onSubmit={() => {
              console.log('submit');
            }}
          >
            <FormGroup>
              <label htmlFor="email">이메일</label>
              <input type="email" id="email" required ref={emailInputRef} />
            </FormGroup>
            <FormGroup>
              <label htmlFor="password">패스워드</label>
              <input
                type="password"
                id="password"
                required
                ref={passwordInputRef}
              />
            </FormGroup>
            <ButtonWrapper>
              <Button href="/auth/signup">회원가입하기</Button>
            </ButtonWrapper>
          </form>
        </Section>
      </ContentArea>
    </>
  );
}

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
`;

const FormGroup = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 10px;
  border-radius: 5px;
  label {
    flex: 0 0 75px;
    width: 75px;
  }
  input {
    border: 1px solid #222;
    height: 30px;
    border-radius: 5px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  margin-top: 50px;
`;
