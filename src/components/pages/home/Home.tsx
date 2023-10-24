import React from 'react';

import Header from '@/components/ui/header/Header';
import HomeButton from '@/components/ui/header/HomeButton';

export default function Home() {
  return (
    <>
      <Header title="메인" rightAction={<HomeButton />} />
    </>
  );
}
