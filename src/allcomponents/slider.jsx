



function Slider() {
    
    return (
<div>

<div className="carousel w-full h-[90vh]">
  
  <div id="slide1" className="carousel-item relative w-full">
    <img src='https://www.kidpid.com/wp-content/uploads/2023/03/basic-supplies-for-art-craft-projects.jpg' className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://thumbs.dreamstime.com/b/craft-supplies-knitting-creative-handmade-yellow-top-view-set-organizing-diy-elements-border-design-craft-159372040.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://holyfamilyindore.in/wp-content/uploads/2021/03/artcraft.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>
        </div>
    )
}

export default Slider