import { useEffect, useState } from "react"
import { Link, useLoaderData } from "react-router-dom"
import Mydatasee from "./mycraftseen"



function Mycraft() {

    const notn = useLoaderData()
    const [nom,setnom] = useState(notn)
    const [aro,setaro] = useState(notn)

	// useEffect(()=>{
	// 	fetch('https://art-five-mu.vercel.app/myallart')
	// 		.then(res=> res.json())
	// 		.then(deta=>setaro(deta) )
	// 		.catch(err=> console.log(err))
	// },[])

    console.log(aro)

    const holo = (fu) => {
       if(fu == 'no'){
        let ko = nom.filter(ni=> ni.customization == fu)
        setaro(ko)
       }
       if(fu == 'yes'){
        let ko = nom.filter(ni=> ni.customization == fu)
        setaro(ko)
       }
       if(fu == 'all'){
        setaro(notn)
       }
    }
    
    return (
        <div>
            <div className="flex justify-end pt-2 items-center ">
            <div className="dropdown dropdown-bottom ">
            <div tabIndex={0} role="button" className="btn m-1 text-white">Customization</div>
            <ul tabIndex={0} className="text-white dropdown-content z-[1] menu p-px shadow bg-white text-black rounded-box w-52">
                <li onClick={()=> holo('yes')}><a className="text-black">YES</a></li>
                <li onClick={()=> holo('no')}><a className="text-black">NO</a></li>
                <li onClick={()=> holo('all')}><a className="text-black">ALL</a></li>
            </ul>
            </div>
            <div className="pr-2"><Link to='/mydataadding'><button className="btn btn-red text-white">add</button></Link></div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center py-8 px-4">
            {aro && aro.map((newao,ind)=> <Mydatasee aro={aro} setaro={setaro} key={ind} newao={newao}></Mydatasee> )}
            </div>
        
        </div>
    )
}

export default Mycraft