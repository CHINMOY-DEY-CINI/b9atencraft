import Artdetails from "./artcra"
import Artcraft from "./homecraft"
import PopularBrand from "./popular"
import Slider from "./slider"



function Home() {
    
    return (
        <div>
            <Slider></Slider>
            <Artdetails></Artdetails>
            <Artcraft></Artcraft>
            <PopularBrand></PopularBrand>
        </div>
    )
}

export default Home


{/* <Link to={`/subcategorysec/${Subcategory}`}></Link> */}
