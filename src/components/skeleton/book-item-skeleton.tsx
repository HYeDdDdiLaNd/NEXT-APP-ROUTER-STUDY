'use client';

import { count } from 'console';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function BookItemSkeleton() {
  return (
    <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
      {/* 왼쪽: 책 표지 */}
      <Skeleton height={100} width={80} />

      {/* 오른쪽: 텍스트 */}
      <div style={{ flex: 1 }}>
        <Skeleton width="80%" height={48} style={{ marginBottom: '16px' }} />{' '}
        {/* 부제목 */}
        <Skeleton width="40%" height={20} /> {/* 저자 + 출판사 */}
      </div>
    </div>
  );
}
