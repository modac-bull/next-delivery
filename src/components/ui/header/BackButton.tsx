import { useRouter } from 'next/router';
import { FaAngleLeft } from 'react-icons/fa';

export default function BackButton() {
  const router = useRouter();

  return (
    <button type='button' onClick={router.back}>
      <FaAngleLeft color="white" size="20" />
    </button>
  );
}
