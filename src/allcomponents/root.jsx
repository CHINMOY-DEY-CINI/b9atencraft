import { Outlet } from "react-router-dom"
import Header from "./header"
import Footer from "./footer"
import { useState } from "react"



function Root() {
    const [joo,setjoo] = useState(false)
    const sudu =()=> {
        setjoo(!joo)
    }
    return (
        <div data-theme={joo ? 'dark' : 'white'}>
            <Header sudu={sudu}></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    )
}

export default Root