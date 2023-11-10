import styled from '@emotion/styled/macro';
import axios, { AxiosError } from 'axios';
import { useRouter } from 'next/router';
import React, { InputHTMLAttributes, useRef } from 'react';

import ContentArea from '@/components/layouts/ContentArea';
import Header from '@/components/layouts/Header';
import Button from '@/components/ui/buttons/Button';
import { BackButton, CartButton, LikeButton } from '@/components/ui/header';

export default function Signup() {
  const router = useRouter();

  const emailInputRef = useRef<HTMLInputElement>(null!);
  const passwordInputRef = useRef<HTMLInputElement>(null!);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    console.log('entered : ', enteredEmail, enteredPassword);

    try {
      // API 엔드포인트에 회원가입 요청을 보냅니다.
      const response = await axios.post('/api/auth/signup', {
        email: enteredEmail,
        password: enteredPassword,
      });
      console.log('response : ', response);
      alert('회원가입이 완료되었습니다.');
      // TODO -> /auth/signin 으로 리다이렉트 처리하기
      router.push('/auth/signin');
    } catch (error) {
      // axios에서 발생한 error
      if (axios.isAxiosError(error)) {
        // 에러 처리
        alert(error.response?.data.message);
      }
    }
  };

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
          <form onSubmit={handleSubmit}>
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
              <Button type="submit">회원가입하기</Button>
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
