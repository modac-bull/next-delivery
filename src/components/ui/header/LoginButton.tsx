import Link from 'next/link';
import { FaUser } from 'react-icons/fa';

export default function LoginButton() {
  return (
    <Link href="/auth/signin">
      <FaUser color="white" size="20" />
    </Link>
  );
}
