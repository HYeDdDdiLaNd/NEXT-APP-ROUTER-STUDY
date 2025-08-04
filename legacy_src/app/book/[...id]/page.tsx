export default async function Page({params}: {params: Promise<{id: string}>}){
    const {id} = await params;
    return <div>book{id} page임.</div>
}


/**
 * 1. [id] book/111  하나의 url 파라미터 id만 받을 수 있음. 
 * 2. [...id] 이렇게하면 book/111/22 이렇게 여러개 받을 수 있음. (캐치 올 세그먼트)
 * 하지만 이렇게 쓰면 book/ 이렇게 url파라미터를 못받을 경우에는 페이지를 찾을 수 없기 때문에
 * 3. [[...id]] 이렇게 적는다. (옵셔널 캐치 올 세그먼트)
 */