import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
	return (
		<>
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
					<input	type="text"	name="search" id="search"/>
					<button className="btn btn-sm">Search</button>
				</div>
				</nav>
      			<br></br>

			<section className="section">
				<div className="box-main">
					<div className="firstHalf">
						<h1 className="text-big"> WHO WE ARE  </h1>       
						
            <br></br>
            <img loading="lazy" width="270" height="160" src="http://sk-engineers.com/wp-content/uploads/2020/04/cropped-photo-1562863658-51483065f301.jpg" class="wp-image-1424 style-438-image style-local-5-c10-image" srcset="https://sk-engineers.com/wp-content/uploads/2020/04/cropped-photo-1562863658-51483065f301.jpg 509w, https://sk-engineers.com/wp-content/uploads/2020/04/cropped-photo-1562863658-51483065f301-300x187.jpg 300w" sizes="(max-width: 509px) 100vw, 509px" alt=""></img>
           
            <p className="text-small">
            SK-Engineers are the leading organization focused on Design Build projects and based in California, USA. SK-Engineers will provide full-fledged and wide ranging of dedicated MEP & Fire-Safety Analysis and design and Engineering Projects. Our Licensed and Experienced engineers are key people for your projects and will help you with cost-effective by using advanced technology in the current industry by providing solutions for your projects.
						</p>
            
					</div>
				</div>
			</section>
			<section className="section">
				<div className="box-main">
					<div className="secondHalf">
						<h1 className="text-big" id="program">
            What do we offer
						</h1>
            <br></br>
            <img loading="lazy" width="270" height="160" src="http://sk-engineers.com/wp-content/uploads/2020/04/cropped-commercial-air-conditioning-2571306-scaled-1.jpg" class="wp-image-1232 style-424-image style-local-5-c18-image" srcset="https://sk-engineers.com/wp-content/uploads/2020/04/cropped-commercial-air-conditioning-2571306-scaled-1.jpg 2560w, https://sk-engineers.com/wp-content/uploads/2020/04/cropped-commercial-air-conditioning-2571306-scaled-1-300x169.jpg 300w, https://sk-engineers.com/wp-content/uploads/2020/04/cropped-commercial-air-conditioning-2571306-scaled-1-1024x576.jpg 1024w, https://sk-engineers.com/wp-content/uploads/2020/04/cropped-commercial-air-conditioning-2571306-scaled-1-768x432.jpg 768w, https://sk-engineers.com/wp-content/uploads/2020/04/cropped-commercial-air-conditioning-2571306-scaled-1-1536x864.jpg 1536w, https://sk-engineers.com/wp-content/uploads/2020/04/cropped-commercial-air-conditioning-2571306-scaled-1-2048x1152.jpg 2048w" sizes="(max-width: 2560px) 100vw, 2560px" alt=""></img>
            <br></br>
						<p className="text-small">
            SK-Engineers team believes in understanding the goals of our clients and their needs for the projects and offer cost-effective solution by using cutting edge technology. SK-Engineers team focused on delivering the clients requirements by coordinating with clients and work with them closely and deliver the projects and make our customers happy through high quality technical services
						</p>
            <a h-use-smooth-scroll="true" href="" data-colibri-id="5-c23" class="d-flex w-100 align-items-center h-button justify-content-lg-center justify-content-md-center justify-content-center style-429 style-local-5-c23 position-relative"> </a>
					</div>
				</div>
			</section>
			<section className="section">
				<div className="box-main">
					<div className="secondHalf">
						<h1 className="text-big" id="program">
						A few things we are great at
						</h1>
            <br></br>
						<p className="text-small">
            We have highly skilled engineers providing our remarkable design service for our client to help us take you to satisfactory services. SK Engineers provides the mechanical systems design services, drawings and documents.SK Engineers provides the wide range of hydraulics and plumbing design services.SK Engineers provides the excellent electrical design services to our valuable clients.SK Engineers provides the fire systems engineering design services. 
						</p>
					</div>
				</div>
			</section>
			
			<footer className="footer">
				<p className="text-footer">
					Copyright ©-All rights are reserved<br></br>
          Ph:0458-256 545<br></br>
          Email:skengg125@gmail.com
				</p>
			</footer>
		</div>
	
	
		</>
	);
}

export default App;

 
