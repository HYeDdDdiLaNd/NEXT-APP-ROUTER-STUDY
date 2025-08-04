import { ReactNode } from "react";
const Layout = ({children} : {children: ReactNode}) => {
    return( 
    <div>
        <div>setting/layout</div>
        {children}
    </div>
    )
}

//search에 있는 layout부터 타고 내려옴 layout 중첩
//seach Layout > search setting Layout > search setting Page
export default Layout;