import BookItem from "@/components/book-item";
import style from "./page.module.css";
import books from "@/mock/books.json";
import { BookData } from "@/types";

//두번 데이터를 불러와야할 때에는 컴포넌트를 따로 만든다.

async function AllBooks() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`);//환경변수에서 불러오기
  if(!response.ok) return <div>이상이 생겨버림.</div>;

  const allBooks:BookData[] = await response.json();
  return (
    <div>
      {allBooks.map((book) => (<BookItem key={book.id} {...book} />))}
    </div>
  )
}

async function RecoBooks() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`, {cache: 'force-cache'});
  if(!response.ok) return <div>여기두 이상이 생겨버림.</div>;

  const randomBooks:BookData[] = await response.json();

  return (
    <div>
      {randomBooks.map((book) => (<BookItem key={book.id} {...book} />))}
    </div>
  )
}

export default function Home() {

  


  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
        <RecoBooks />
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
        <AllBooks />
      </section>
    </div>
  );
}
