import React from "react";
import { Link } from "react-router-dom";


function About(){
    return(
        <div>
        <div>
			<nav className="navbar background">
				<ul className="nav-list">
					<div className="logo">
				
            <img src="https://sk-engineers.com/wp-content/uploads/2020/04/cropped-2_Flat_logo_on_transparent_187x71-1.png" class="h-logo__image h-logo__image_h logo-image style-234-image style-local-11-h5-image" alt=""></img>
					</div>
					<li><Link to="/home">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/gallery">Gallery</Link></li>
					<li><Link to="/contact">Contact</Link></li>
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
      
        <div id="aboutmain">
            
        <h1>About Us</h1>
        <hr></hr>
        <div id="aboutcnt">
        SK Engineering Services established in 2008 and is managed by professional & experienced team to market & promote its overseas Principals, provide front line technical support & after sales services to Oil & Gas, Chemicals, Pharmaceutical, Power, Fertilizers, LNG and other Process Industries.

        Over these years SKES had undergone a sizeable expansion in its activities in the areas of manufacturing and erection of equipments and auxiliaries including structural, tanks, silos, pipelines and related engineering operations. SK Engineering Services established in 2008 and is managed by professional & experienced team to market & promote its overseas Principals, provide front line technical support & after sales services to Oil & Gas, Chemicals, Pharmaceutical, Power, Fertilizers, LNG and other Process Industries.

Over these years SKES had undergone a sizeable expansion in its activities in the areas of manufacturing and erection of equipments and auxiliaries including structural, tanks, silos, pipelines and related engineering operations.
        </div>
        </div>
        </div>
    )
}

export default About;