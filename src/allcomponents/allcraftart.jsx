import { useEffect, useState } from "react"
import Allonecraft from "./allonecraft"




function Allcraft() {

    const [ar,setar] = useState([])

	useEffect(()=>{
		fetch('https://art-five-mu.vercel.app/allart')
			.then(res=> res.json())
			.then(deta=>setar(deta) )
			.catch(err=> console.log(err))
	},[])
    
    return (
        <div className="text-center py-4">
            <h1 className="text-5xl text-black font-bold">ALL ART & CRAFT</h1>
            <div >
            <div className="overflow-x-auto">
                        <table className="table">
                            <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Email</th>
                                <th>Details</th>
                            </tr>
                            </thead>
                            <tbody>

                            {ar && ar.map((newa,ind)=> <Allonecraft key={ind} newa={newa} joru={ind+1}></Allonecraft> )}
                            
                            </tbody>
                        </table>
                    </div>
            
            </div>
        </div>
    )
}

export default Allcraft

{/* <Allonecraft key={ind} newa={newa}></Allonecraft> */}
// className="flex flex-wrap gap-2 justify-center py-8"





{/* <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr> */}