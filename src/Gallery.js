import React from "react";
import img1 from './img1.png';
import img2 from './img2.png';
import img3 from './img3.png';
import img4 from './img4.png';
import img5 from './img5.png';
import img6 from './img6.png';
import img7 from './img7.png';
import { Link } from "react-router-dom";

function Gallery(){
    return(
        <div>

<div>
			<nav className="navbar background">
				<ul className="nav-list">
					<div className="logo">
				
            <img src="https://sk-engineers.com/wp-content/uploads/2020/04/cropped-2_Flat_logo_on_transparent_187x71-1.png" class="h-logo__image h-logo__image_h logo-image style-234-image style-local-11-h5-image" alt=""></img>
					</div>
					<li>
						
						<Link to="/home">Home</Link>
					</li>
					<li>
						
						<Link to="/about">About</Link>
					</li>
					<li>
						
						<Link to="/gallery">Gallery</Link>
					</li>
					<li>
						
						<Link to="/contact">Contact</Link>
					</li>
				</ul>

				<div className="rightNav">
					<input
						type="text"
						name="search"
						id="search"
					/>
					<button className="btn btn-sm">
						Search
					</button>
				</div>
			</nav>
      <br></br>
      </div>
            <div class="container-fluid mt-3">
  <h1>Our Gallery</h1>
  <p></p>
</div>
            
<div id="demo" class="carousel slide" data-bs-ride="carousel">

 
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="4"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="5"></button>
    <button type="button" data-bs-target="#demo" data-bs-slide-to="6"></button>
  </div>

  
  <div class="carousel-inner" id="imagediv" >
    <div class="carousel-item active">
      <img src={img1} alt="im1" class="d-block w-70"/>
    </div>
    <div class="carousel-item">
      <img src={img2} alt="im2" class="d-block w-70"/>
    </div>
    <div class="carousel-item">
      <img src={img3} alt="im3" class="d-block w-70  "/>
    </div>
     <div class="carousel-item">
      <img src={img4} alt="im4" class="d-block w-70  "/>
    </div>
    <div class="carousel-item">
      <img src={img5} alt="im5" class="d-block w-70 "/>
    </div>
    <div class="carousel-item">
      <img src={img6} alt="im6" class="d-block w-70 "/>
    </div>
    <div class="carousel-item">
      <img src={img7} alt="im7" class="d-block w-70 "/>
    </div> 
  </div>

 
  <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
    <span class="carousel-control-prev-icon"></span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
    <span class="carousel-control-next-icon"></span>
  </button>
</div>



        </div>
    )
}

export default Gallery;