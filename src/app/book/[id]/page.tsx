import { BookData } from '@/types';
import style from './page.module.css';
import { notFound } from 'next/navigation';
import { title } from 'process';

// /export const dynamicParams =false; /* 아래에 정의된 정적 params 외에는 다 404로 보내버림: 이 페이지는 동적이면 안되는구나로 인식함.*/
export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]; //사전에 미리 렌더링해서 정적페이지로 만들어놀음.
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string | string[] }>;
}) {
  const { id } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${id}`
  );

  if (!response.ok) {
    throw new Error(response.statusText);
  }
  const book: BookData = await response.json();
  return {
    title: `${book.title} - 한입북스`,
    description: `${book.description}`,
    openGraph: {
      title: `${book.title} - 한입북스`,
      description: `${book.description}`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string | string[] }>;
}) {
  const { id } = await params;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${id}`
  );
  if (!response.ok) {
    if (response.status === 404) {
      notFound();
    }
    return <div>오류 여기두....</div>;
  }

  const bookData: BookData = await response.json();
  const { title, subTitle, description, author, publisher, coverImgUrl } =
    bookData;

  return (
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
}
