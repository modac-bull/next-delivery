import HeadPageMeta from '@/components/layouts/HeadPageMeta';
import LayoutDefault from '@/components/layouts/LayoutDefault';
import StoreDetail from '@/components/pages/store/StoreDetail';

export default function StoreDetailPage() {
  return (
    <>
      <HeadPageMeta title="음식 배달 앱 (next/ts) - 상세" />

      <LayoutDefault>
        <StoreDetail />
      </LayoutDefault>
    </>
  );
}
