'use client';
import { useRouter } from 'next/navigation';
import { startTransition, useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  /* next에서 error 객체로 에러정보를 전달함. */

  const router = useRouter();
  useEffect(() => {
    console.log(error.message);
  }, [error]);
  return (
    <div>
      <h3>오류가 발생했습니다.</h3>
      <button
        type="button"
        onClick={() => {
          startTransition(() => {
            /* startTransition: 하나의 콜백함수를 인수로 전달받아서 이 콜백함수 안에 들어있는 ui를 변경시키는 작업을 모두 일괄적으로 처리해줌, */
            router.refresh(); /* 현재 페이지에 필요한 서버컴포넌트들을 다시 불러옴: 비동기임  */
            reset(); //에러 상태 초기화, 컴포넌트들 다시 렌더링
          }); //넥스트에서는 레이아웃을 살리기 위해 어쩔 수 없이 error.tsx를 경로별로 만들어줘야하는 경우가 생길 수도 있다.
        }}
      >
        {/* reset(): 서버로 부터 받은 데이터를 가지고 클라이언트 컴포넌트들을 다시 그림. */}
        다시시도
      </button>
    </div>
  );
}
