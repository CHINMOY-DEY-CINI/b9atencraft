import { useLoaderData } from "react-router-dom"
import Onesub from "./newsub"
import { useState } from "react"




function Subcategorysection() {
    

    const subca = useLoaderData()
    const [noh,setnoh] = useState(subca)
    const [nom,setnom] = useState('')
    const muhu = (juku) => {
        setnom(juku)
    }


    return(
        <div>
            <h1 className="text-center text-2xl py-4">All {nom} Category</h1>
            <div className="flex flex-wrap gap-2 justify-center py-4" >

            {
              noh && noh.map((nuk,ind)=> <Onesub muhu={muhu} key={ind} nuk={nuk}></Onesub> )
            }
            </div>
        </div>
    )
}

export default Subcategorysection
