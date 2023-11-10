import Link from 'next/link';
import { FaUser } from 'react-icons/fa';

export default function MypageButton() {
  return (
    <Link href="/mypage">
      <FaUser color="white" size="20" />
    </Link>
  );
}
