import { ReactNode, Suspense } from 'react';
import Searchbar from '../../components/searchbar';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Suspense fallback={<div>loading...</div>}>
        <Searchbar />
        {/* 서버측 사전렌더링에서 제외시킴. useSearchParams*/}
      </Suspense>
      {children}
    </div>
  );
}
