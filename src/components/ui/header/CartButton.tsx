import Link from 'next/link';
import React from 'react';
import { FaCartPlus } from 'react-icons/fa';

export default function CartButton() {
  return (
    <Link href="/cart">
      <FaCartPlus color="white" size="20" />
    </Link>
  );
}
