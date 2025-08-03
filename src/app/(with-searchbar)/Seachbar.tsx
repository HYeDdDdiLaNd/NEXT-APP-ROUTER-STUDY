'use client' //자바스크립트로 상호작용해야하기 때문에 클라이언트 컴포넌트로 선언한다.
import { useState } from "react";

const Searchbar = () => {
    const [search, setSearch] = useState('');
    const onchangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }
    return <div>
        <input type="text" name="search" id="search" value={search} onChange={onchangeSearch}/>
     <button type="button">검색</button>
    </div>
}

export default Searchbar;

//이 컴포넌트는 클라이언트와 자바스크립트로 상호작용해야하기 때문에 클라이언트 컴포넌트로 만들어줘야한다.
//그리고 클라이언트 컴포넌트는 적으면 적을수록 좋다. (next.js 를 사용하는 큰 장점이기도 하다.)
//그리고 앱라우터에서는 파일의 이름이 페이지나 레이아웃이 아니면 그냥 일반적인 자바스크립트 또는 일반적인 
//타입스크립트로 간주하기 떄문에 이렇게 컴포넌트를 위한 파일도 앱 폴더 안에 만들어줘도 된다. (Co- location)