import { useState } from "react"
import { useEffect } from "react"
import Oneart from "./oneart"



function Artcraft() {
	
	const [art,setart] = useState([])

	useEffect(()=>{
		fetch('https://art-five-mu.vercel.app/art')
			.then(res=> res.json())
			.then(deta=>setart(deta) )
			.catch(err=> console.log(err))
	},[])
	console.log(art)

	// const {customization,name,item,imgi,stock,Rating,Processing,email,Price,Short,Subcategory} = art

	return (
		<div className="flex flex-wrap gap-2 justify-center py-8 px-4" >
			{art && art.map((newar,ind)=> <Oneart key={ind} newar={newar}></Oneart> )}
		</div>
	)
}

export default Artcraft