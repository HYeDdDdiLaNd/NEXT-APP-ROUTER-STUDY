import BookItem from '@/components/book-item';
import { BookData } from '@/types';
import { title } from 'process';
import { Metadata } from 'next';

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}): Promise<Metadata> {
  //현재 페이지에 메타 데이터를 동적으로 생성하는 역할을 함.
  const { q } = await searchParams;
  return {
    title: `${q} : 한입북스 검색`,
    description: `${q}의 검색 결과`,
    openGraph: {
      title: `${q}: 한입북스 검색`,
      description: `${q}: 한입북스 검색결과 입니다.`,
    },
  };
}

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${q}`,
    { cache: 'force-cache' }
  ); //데이터 페칭의 기본값이 캐싱되지 않음. => 데이터만이라도 캐싱되도록 변경함. 다이나믹한 페이지이지만 조금이라도 속도를 최적화 하기 위해서
  if (!response.ok) return <div>오류가 여기두 발생해버림.</div>;

  const books: BookData[] = await response.json();

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
