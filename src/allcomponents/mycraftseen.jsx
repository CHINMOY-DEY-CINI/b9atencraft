import { Link } from "react-router-dom"
import Swal from 'sweetalert2'

// or via CommonJS
// const Swal = require('sweetalert2')
// import 'sweetalert2/src/sweetalert2.scss'



function Mydatasee({newao,setaro,aro}) {
    const {_id,customization,name,item,imgi,stock,Rating,Processing,email,Price,Short,Subcategory} = newao
    
    const detate = (newide) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your craft has been deleted.",
                icon: "success"
              })
            fetch(`https://art-five-mu.vercel.app/myallart/${_id}`,{
            method:'DELETE'
        })
            .then(res=> res.json())
            .then(()=> {
                const fiterdelete = aro.filter(newaro=> newaro.id != newide)
                setaro(fiterdelete)
            })
            .catch(err=> console.log(err))
            }
          });
        
    }
    
    return (
        // <div>
        <div className="md:w-[49%]">
            <div className="card card-side bg-base-100 text-white shadow-xl h-[400px] md:h-[400px] w-[460px] md:w-full">
            <figure><img src={imgi} alt="Movie" className="w-80 h-80"/></figure>
            <div className="card-body">
                <h2 className="card-title">{item}</h2>
                <p>Rating: {Rating}</p>
                <h6>Price: {Price}</h6>
                <h6>Customization: {customization}</h6>
                <h6>StockStatus: {stock}</h6>
                <div className="card-actions flex flex-col md:flex-row md:justify-end">
                <Link to={`/myallart/${_id}`}><button className="btn btn-primary text-white" >Update</button></Link>
                <><a onClick={()=>detate(_id)} className="btn bg-red text-white" >Delete</a></>
                </div>
            </div>
            </div>
        </div>
        // </div>
    )
}


export default Mydatasee