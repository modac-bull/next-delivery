import Link from 'next/link';
import React from 'react';
import { FaHome } from 'react-icons/fa';

export default function HomeButton() {
  return (
    <Link href="/">
      <FaHome color="white" size="20" />
    </Link>
  );
}
