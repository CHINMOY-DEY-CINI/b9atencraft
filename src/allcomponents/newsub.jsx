import { Link, useNavigate } from "react-router-dom"



function Onesub({nuk,muhu}) {
    
    const {_id,customization,name,item,imgi,stock,Rating,Processing,email,Price,Short,Subcategory} = nuk

    const hdu = useNavigate()

    const hur = () => {
        hdu(-1)
    }

    muhu(Subcategory)

    return (
        
            
            <div className="md:w-[49%]" >
            {/* <Link to={`/subcategorysec/${Subcategory}`}> */}
            <div className="card card-side bg-base-100 shadow-xl ">
            <figure><img src={imgi} alt="Movie" className="w-80 h-80"/></figure>
            <div className="card-body">
                <h2 className="card-title">{item}</h2>
                <h4>Subcategory: {Subcategory}</h4>
                <p>{Short.length > 20 ? Short.slice(0,40) + ' ...' : Short}</p>
                <div className="card-actions justify-end">
                <div className="flex gap-2">
                <button className="btn btn-primary" onClick={hur}>back</button>
                <Link to={`/art/${_id}`}><button className="btn btn-primary" >View Details</button></Link>
                
                </div>
                </div>
            </div>
            </div>
            {/* </Link> */}
        </div>
        
    )
}

export default Onesub