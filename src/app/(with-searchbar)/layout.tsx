
import { ReactNode } from "react";
import Seachbar from './Seachbar'

const Layout = ({children} : {children: ReactNode}) => {
    return( 
    <div>
        <Seachbar></Seachbar>
        {children}
    </div>
    )
}

export default Layout;