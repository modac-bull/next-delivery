import HeadPageMeta from '@/components/layouts/HeadPageMeta';
import LayoutDefault from '@/components/layouts/LayoutDefault';
import Signup from '@/components/pages/auth/singup/Singup';

export default function SignUpPage() {
  return (
    <>
      <HeadPageMeta title="회원가입" />

      <LayoutDefault>
        <Signup />
      </LayoutDefault>
    </>
  );
}
