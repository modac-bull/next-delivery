import styled from '@emotion/styled/macro';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useRef } from 'react';

import ContentArea from '@/components/layouts/ContentArea';
import Header from '@/components/layouts/Header';
import Button from '@/components/ui/buttons/Button';
import ButtonText from '@/components/ui/buttons/ButtonText';
import { BackButton, CartButton, LikeButton } from '@/components/ui/header';

export default function Signin() {
  const router = useRouter();

  const emailInputRef = useRef<HTMLInputElement>(null!);
  const passwordInputRef = useRef<HTMLInputElement>(null!);

  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    try {
      // 로그인 API 엔드포인트로 요청
      const result = await signIn('credentials', {
        email: enteredEmail,
        password: enteredPassword,
        callbackUrl: '/',
      });
    } catch (error) {
      // 에러 처리
      console.log('로그인 실패');
      // axios에서 발생한 error
      if (axios.isAxiosError(error)) {
        // 에러 처리
        alert(error.response?.data.message);
      }
    }
  };

  const googleLoginHandler = async () => {
    try {
      const result = await signIn('google', { callbackUrl: '/' });
    } catch (error) {
      console.log('erro : ', error);
    }
  };

  return (
    <>
      <Header
        title="로그인"
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
              <Button>로그인</Button>
              <Button type="button" onClick={googleLoginHandler}>
                구글로 로그인
              </Button>
              <ButtonText href="/auth/signup">회원가입 하러가기</ButtonText>
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
