import React from 'react';
import iconContact from "../images/con1.png";

export default function Contact(){
	return(
		<div className="contact-div">
			<div className="contact" id="contact">
				<div className="container">
					<div className="contact-info text-center">
						<h3>CONTACT</h3>
						<div className="strip text-center"><img src={iconContact} alt="icon contact"/></div>
					</div>
					<div className="contact-grids">
						<div className="contact-left">
							<h3>Say Hi to Me</h3>
							<div className="stripb"></div>
							<ul>
								<li>Central City </li>
								<li>Auckland 1010</li>
								<li>New Zealand</li>
								<li><a href="tel:+642102524435">02102524435</a></li>
								<li><a href="mailto:drochachagas@gmail.com">drochachagas@gmail.com</a></li>
							</ul>
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
			<div className="footer-top"></div>
		</div>
	);
}