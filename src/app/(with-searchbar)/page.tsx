"use client" //서버측, 클라이언트측 1번씩 총 2번 실행
import { useEffect } from "react";
import styles from "./page.module.css";

export default function Home() {
  console.log('아나ㅏ나나~~~****')
  useEffect(()=>{
  }, [])
  return (
    <div className={styles.page}>
     잉덱스임
    </div>
  );
}


//특정 페이지만 제외하고 공통적인 레이아웃을 사용하는 route group
// () 사용해서 폴더를 만들고 공통적으로 레이아웃을 적용할 page.tsx 파일이나 폴더를 
//라우트 앱으로 지정해놓은 파일에 이동하고,
//라우트 앱 바로 하위에 layout 파일을 생성하면 
//라우트 앱 하위에 만들어진 layout을 기반으로
//해당 폴더에 있는 페이지들이 공통적인 layout을 갖는다.