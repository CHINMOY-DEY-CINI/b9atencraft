import { Link } from "react-router-dom"





function Allonecraft({newa,joru}) {
    
    const {_id,customization,name,item,imgi,stock,Rating,Processing,email,Price,Short,Subcategory} = newa
    return (
    <tr>
        <th>{joru}</th>
        <td>{name}</td>
        <td>{Price}$</td>
        <td>{email}</td>
        <td><Link to={`/allcraftart/allart/${_id}`}><button className="btn btn-primary" >View Details</button></Link></td>
    </tr>
    
    )
}


export default Allonecraft


{/* <div className="md:w-[49%]">
            <div className="card card-side bg-base-100 shadow-xl ">
            <figure><img src={imgi} alt="Movie" className="w-80 h-80"/></figure>
            <div className="card-body">
                <h2 className="card-title">{item}</h2>
                <p>{Short.length > 20 ? Short.slice(0,40) + ' ...' : Short}</p>
                <h6>Name: {name}</h6>
                <div className="card-actions justify-end">
                <Link to={`/allcraftart/allart/${_id}`}><button className="btn btn-primary" >View Details</button></Link>
                </div>
            </div>
            </div>
</div> */}