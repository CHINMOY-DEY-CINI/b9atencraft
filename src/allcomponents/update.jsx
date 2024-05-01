import { useLoaderData } from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Updatepage() {

    const updata = useLoaderData()
    const {_id,customization,name,item,imgi,stock,Rating,Processing,email,Price,Short,Subcategory} = updata
    console.log(updata)

    const Lorgy = (e) => {
        e.preventDefault()
        const fo = e.target
        const itemi = fo.Item_Name.value
        const imgii = fo.Image.value
        const Subcategoryi = fo.Subcategory_Name.value
        const Shorti = fo.Short_Description.value
        const Pricei = fo.Price.value
        const Ratingi = fo.Rating.value
        const Processingi = fo.Processing_time.value
        const emaili = fo.Email.value
        const namei = fo.name.value
        const stocki = fo.In_stock.value
        const customizationi = fo.customization.value
        const jonii = {customizationi,namei,itemi,imgii,stocki,Ratingi,Processingi,emaili,Pricei,Shorti,Subcategoryi}
        console.log(jonii)

        const omaip = { method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(jonii)
        }

        fetch(`https://art-6ygpy5eml-chinmoys-projects-61429ffd.vercel.app/myallart/${_id}` , omaip )
            .then(res=> res.json())
            .then(modata=> {console.log(modata)
                toast('you successfully updated one data')})
            .catch(err=> console.log(err))
    }



    return (
        <div>
            <h1>Update Craft</h1>
            <ToastContainer />
            <div>
            <form className="w-4/5 mx-auto" onSubmit={Lorgy}>
                <div className="flex gap-4">
                    <div className="from-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group ">
                            <input type="text" defaultValue={name} className="input input-bordered md:w-full" placeholder="name" name="name" id="" />
                        </label>
                    </div>
                    <div className="from-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <label className="input-group ">
                            <input type="text" defaultValue={item} className="input input-bordered md:w-full" placeholder="Item_Name" name="Item_Name" id="" />
                        </label>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="from-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group ">
                            <input type="text" defaultValue={Short} className="input input-bordered md:w-full" placeholder="Short Description" name="Short_Description" id="" />
                        </label>
                    </div>
                    <div className="from-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Subcategory Name</span>
                        </label>
                        <label className="input-group ">
                            <input type="text" defaultValue={Subcategory} className="input input-bordered md:w-full" placeholder="Subcategory_Name" name="Subcategory_Name" id="" />
                        </label>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="from-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group ">
                            <input type="number" defaultValue={Price} className="input input-bordered md:w-full" placeholder="Price" name="Price" id="" />
                        </label>
                    </div>
                    <div className="from-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group ">
                            <input type='text' defaultValue={Rating} className="input input-bordered md:w-full" placeholder="Rating" name="Rating" id="" />
                        </label>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="from-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Processing Time</span>
                        </label>
                        <label className="input-group ">
                            <input type="number" defaultValue={Processing} className="input input-bordered md:w-full" placeholder="Processing_time" name="Processing_time" id="" />
                        </label>
                    </div>
                    <div className="from-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <label className="input-group ">
                            <input type='url' defaultValue={imgi} className="input input-bordered md:w-full" placeholder="Image" name="Image" id="" />
                        </label>
                    </div>
                </div>
                <div className="flex gap-4">
                    <div className="from-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group ">
                            <input type='email' defaultValue={email} className="input input-bordered md:w-full" placeholder="Email" name="Email" id="" />
                        </label>
                    </div>
                    <div className="md:w-1/2 flex">

                    <div className="from-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">StockStatus</span>
                        </label>
                        <label className="input-group">
                            {/* <input type="text" className="input input-bordered" placeholder="name" name="" id="" /> */}
                            <label htmlFor="radio1"><input id="radio1" type="radio" required  name="In_stock" className="radio" value='In stock' /> <span>In stock</span></label>
                            <label htmlFor="radio2" className="ml-2"><input id="radio2"  type="radio" name="In_stock" value='Made to Order' className="radio" /> <span>Made to Order</span></label>
                            {/* <input type="radio" name="radio-1" className="radio" /> Made to Order */}
                        </label>
                    </div>
                    <div className="from-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Customization</span>
                        </label>
                        <label className="input-group">
                            {/* <input type="text" className="input input-bordered" placeholder="name" name="" id="" /> */}
                            <label htmlFor="rad"><input id="rad" type="radio" required name="customization" className="radio" value='yes' /> <span>YES</span></label>
                            <label htmlFor="radi" className="ml-2"><input id="radi"  type="radio" name="customization" value='no' className="radio" /> <span>NO</span></label>
                            {/* <input type="radio" name="radio-1" className="radio" /> Made to Order */}
                        </label>
                    </div>
                    </div>
                </div>
                <div className="my-4">
                    <input type="submit" className="btn btn-block" value="update" />
                </div>
            </form>
        </div>

        </div>
    )
}


export default Updatepage