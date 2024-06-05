import React from "react";
import { Link } from "react-router-dom";
import locat from "./locat.png";

function Contact(){
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
<div id="conatctdiv">
<div>
    <img src={locat} alt="locatimg"/>
</div>

<div id="contactdetails">
    <h2>S.K.Engineering Services</h2><br></br>
    <p>C-304, 1st Floor, Vashi Plaza,</p>
    <p>Sector 17, Vashi, Navi Mumbai – 400 705.</p>
    <h2>Telefax:</h2>
    <p>+91 22 2765 1042</p>
    <h2>E.mail:</h2>
    <a href="#"> info@skengineering.net</a><br></br><br></br>
	<h2>Santhosh Nair</h2>
	<p>Mobile No :+91-8108187202</p>
	<p>Email Id :<a>spnair@skengineering.net</a></p>
</div>
</div>

        </div>
    )
}

export default Contact;