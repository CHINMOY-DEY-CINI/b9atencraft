



function Mydataadd() {


    const Lormsi = (e) => {
        e.preventDefault()
        const fo = e.target
        const item = fo.Item_Name.value
        const imgi = fo.Image.value
        const Subcategory = fo.Subcategory_Name.value
        const Short = fo.Short_Description.value
        const Price = fo.Price.value
        const Rating = fo.Rating.value
        const Processing = fo.Processing_time.value
        const email = fo.Email.value
        const name = fo.name.value
        const stock = fo.In_stock.value
        const customization = fo.customization.value
        const joni = {customization,name,item,imgi,stock,Rating,Processing,email,Price,Short,Subcategory}
        console.log(joni)

        const oma = { 
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(joni)
        }

        fetch(`https://art-6ygpy5eml-chinmoys-projects-61429ffd.vercel.app/myallart` , oma )
            .then(res=> {console.log(res)
            fo.reset()})
            .catch(err=> console.log(err))
    }
    
    
    return (
        <div>
            <form className="w-4/5 mx-auto" onSubmit={Lormsi}>
                <div className="flex-none md:flex gap-4">
                    <div className="from-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group ">
                            <input type="text" required className="input input-bordered w-full" placeholder="name" name="name" id="" />
                        </label>
                    </div>
                    <div className="from-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Item Name</span>
                        </label>
                        <label className="input-group ">
                            <input type="text" required className="input input-bordered w-full" placeholder="Item_Name" name="Item_Name" id="" />
                        </label>
                    </div>
                </div>
                <div className="flex-none md:flex gap-4">
                    <div className="from-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <label className="input-group ">
                            <input type="text" required className="input input-bordered w-full" placeholder="Short Description" name="Short_Description" id="" />
                        </label>
                    </div>
                    <div className="from-control w-ful md:w-1/2">
                        <label className="label">
                            <span className="label-text">Subcategory Name</span>
                        </label>
                        <label className="input-group ">
                            <input type="text" required className="input input-bordered w-full" placeholder="Subcategory_Name" name="Subcategory_Name" id="" />
                        </label>
                    </div>
                </div>
                <div className="flex-none md:flex gap-4">
                    <div className="from-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group ">
                            <input type="number" required className="input input-bordered w-full" placeholder="Price" name="Price" id="" />
                        </label>
                    </div>
                    <div className="from-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group ">
                            <input type='text' required className="input input-bordered w-full" placeholder="Rating" name="Rating" id="" />
                        </label>
                    </div>
                </div>
                <div className="flex-none md:flex gap-4">
                    <div className="from-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Processing Time</span>
                        </label>
                        <label className="input-group ">
                            <input type="number" required className="input input-bordered w-full" placeholder="Processing_time" name="Processing_time" id="" />
                        </label>
                    </div>
                    <div className="from-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <label className="input-group ">
                            <input type='url' required className="input input-bordered w-full" placeholder="Image" name="Image" id="" />
                        </label>
                    </div>
                </div>
                <div className="flex-none md:flex gap-4">
                    <div className="from-control w-full md:w-1/2">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <label className="input-group ">
                            <input type='email' required className="input input-bordered w-full" placeholder="Email" name="Email" id="" />
                        </label>
                    </div>
                    <div className="md:w-1/2 flex">

                    <div className="from-control md:w-3/4">
                        <label className="label">
                            <span className="label-text">StockStatus</span>
                        </label>
                        <label className="input-group grid grid-cols-2 md:grid-cols-2">
                            {/* <input type="text" className="input input-bordered" placeholder="name" name="" id="" /> */}
                            <label htmlFor="radio1"><input id="radio1" type="radio" name="In_stock" required className="radio" value='In stock' /> <span>In stock</span></label>
                            <label htmlFor="radio2" className="ml-2"><input id="radio2" type="radio" name="In_stock" value='Made to Order' className="radio" /> <span>Made to Order</span></label>
                            {/* <input type="radio" name="radio-1" className="radio" /> Made to Order */}
                        </label>
                    </div>
                    <div className="from-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Customization</span>
                        </label>
                        <label className="input-group">
                            {/* <input type="text" className="input input-bordered" placeholder="name" name="" id="" /> */}
                            <label htmlFor="rad"><input id="rad" type="radio" name="customization" required className="radio" value='yes' /> <span>YES</span></label>
                            <label htmlFor="radi" className="ml-2"><input id="radi" type="radio" name="customization" value='no' className="radio" /> <span>NO</span></label>
                            {/* <input type="radio" name="radio-1" className="radio" /> Made to Order */}
                        </label>
                    </div>
                    </div>
                </div>
                <div className="my-4">
                    <input type="submit" className="btn btn-block" value="ADD" />
                </div>
            </form>
        </div>
    )
}

export default Mydataadd