import HeadPageMeta from '@/components/layouts/HeadPageMeta';
import LayoutDefault from '@/components/layouts/LayoutDefault';
import Home from '@/components/pages/home/Home';

export default function HomePage() {
  return (
    <>
      <HeadPageMeta title="음식 배달 앱 (next/ts)" />

      <LayoutDefault>
        <Home />
      </LayoutDefault>
    </>
  );
}
