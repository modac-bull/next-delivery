import Link from 'next/link';
import React from 'react';
import { FaHeart } from 'react-icons/fa';

export default function LikeButton() {
  return (
    <Link href="/like">
      <FaHeart color="white" size="20" />
    </Link>
  );
}
