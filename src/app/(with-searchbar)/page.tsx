import BookItem from '@/components/book-item';
import style from './page.module.css';
import books from '@/mock/books.json';
import { BookData } from '@/types';
import delay from '@/util/delay';
import { Suspense } from 'react';
import BookListSkeleton from '@/components/skeleton/book-list-skeleton';
import { Metadata } from 'next';

//특정 페이지의 유형을 강제로 static, dynamic 페이지로 설정
//1. auto: 기본값, 아무것도 강제로 하지 않음.
//2. force-dynamic: 페이지를 강제로 dynamic 페이지로 설정
//3. force-static: 페이지를 강제로 static 페이지로 설정
//4. error: 페이지를 강제로 static 페이지로 설정 (설정하면 안되는 이유 - 빌드타임에 에러를 발생시킨다.)
export const dynamic = 'auto';

export const metadata: Metadata = {
  title: '~~',
  description: '~~',
  openGraph: {},
};
//두번 데이터를 불러와야할 때에는 컴포넌트를 따로 만든다.
async function AllBooks() {
  await delay(3500);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`
  ); //환경변수에서 불러오기
  if (!response.ok) return <div>이상이 생겨버림.</div>;

  const allBooks: BookData[] = await response.json();
  return (
    <div>
      {allBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

async function RecoBooks() {
  await delay(2500);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
    { next: { revalidate: 3 } }
  );
  if (!response.ok) return <div>여기두 이상이 생겨버림.</div>;

  const randomBooks: BookData[] = await response.json();

  return (
    <div>
      {randomBooks.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <Suspense fallback={<BookListSkeleton count={3} />}>
          <RecoBooks />
        </Suspense>
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <Suspense fallback={<BookListSkeleton count={5} />}>
          <AllBooks />
        </Suspense>
      </section>
    </div>
  );
}
