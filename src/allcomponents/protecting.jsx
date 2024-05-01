import { useContext } from "react"
// import { NewContex } from "./Contactap"
import { Navigate, useLocation } from "react-router-dom"
import { NewContex } from "./contaxt"




function Onlyprotect({children}) {
    
    const {user,loading} = useContext(NewContex)
    const locati = useLocation()

    if(loading){
       return <span className="loading loading-ring loading-lg"></span>
    }

    if(user){
        return children
    }

    return <Navigate to='/login' state={locati.pathname}></Navigate>
}


export default Onlyprotect