import { Link, useLoaderData, useNavigate } from "react-router-dom";



function Allonedetails() {

    const newdeta = useLoaderData()
    const {_id,customization,name,item,imgi,stock,Rating,Processing,email,Price,Short,Subcategory} = newdeta
    const nibi = useNavigate()

    const joke = () => {
        nibi(-1)
    }

    return (
        <div className="p-6">
            <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={imgi} alt="Album" className="w-full h-96 md:w-80 md:h-96" /></figure>
            <div className="card-body">
                <h2 className="card-title">{item}</h2>
                <p>{Short}</p>
                <h6>Name: {name}</h6>
                <h6>Email: {email}</h6>
                <h6>Price: ${Price}</h6>
                <h6>Rating: {Rating}star</h6>
                <h6>Processing: {Processing} day</h6>
                
                <div className="card-actions justify-end">
                    {/* <Link to='/'><button className="btn btn-primary">Back to Home</button></Link> */}
                    <button className="btn btn-primary" onClick={joke}>Back</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Allonedetails

