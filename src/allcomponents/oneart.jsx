import { Link } from "react-router-dom"
import { Fade ,Flip } from "react-awesome-reveal";


function Oneart({newar}) {
    
    const {_id,customization,name,item,imgi,stock,Rating,Processing,email,Price,Short,Subcategory} = newar


    return (
        
                
            <div className="md:w-[49%]" >
            <Link to={`/subcategorysec/${Subcategory}`}>
            <div className="card card-side text-white bg-base-100 shadow-xl ">
            <figure><img src={imgi} alt="Movie" className="w-80 h-80"/></figure>
            <div className="card-body">
                <Flip>

                <h2 className="card-title">{item}</h2>
                <h4>Subcategory: {Subcategory}</h4>
                <p>{Short.length > 20 ? Short.slice(0,40) + ' ...' : Short}</p>
                <div className="card-actions justify-end">
                <Link to={`/art/${_id}`}><button className="btn btn-primary text-white" >View Details</button></Link>
                </div>
                </Flip>
            </div>
            </div>
            </Link>
        </div>
        
    )
}

export default Oneart