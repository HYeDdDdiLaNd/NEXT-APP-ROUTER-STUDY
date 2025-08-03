export default async function Page({searchParams}: {searchParams: Promise<{q: string}>}) {
    //console.log(props);
    /** App Router 버전의 넥스트 앱에서는 이런 쿼리 스트링(?q=dfdfs)이나 url파라미터([id]: search/id)와 같은 
     * 경로 상에 포함되는 값들은 이 페이지 컴포넌트의 props로 모두 전달이 된다.
     */
    const {q} = await searchParams;
    return <div>서치페이지: {q}</div>//쿼리 스트링 불러오기
}