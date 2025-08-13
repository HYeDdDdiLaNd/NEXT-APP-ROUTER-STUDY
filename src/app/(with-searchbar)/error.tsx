'use client';
import { useEffect } from 'react';

export default function Error({ error }: { error: Error; reset: () => void }) {
  /* next에서 error 객체로 에러정보를 전달함. */
  useEffect(() => {
    console.log(error.message);
  }, [error]);
  return (
    <div>
      <h3>오류가 발생했습니다.</h3>
      <button type="button" onClick={() => reset()}>
        {/* reset(): 서버로 부터 받은 데이터를 가지고 클라이언트 컴포넌트들을 다시 그림. */}
        다시시도
      </button>
    </div>
  );
}
