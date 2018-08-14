import React from 'react';
import iconWork from "../images/work.png";

export default function Work(){
	return(
		<div className="work-experience text-center">
			<div className="container">
				<div className="work-info">
					<h3>WORK EXPERIENCE</h3>
				</div>
				<div className="strip text-center"><img src={iconWork} alt="icon work"/></div>
				<div className="work-grids">
					<div className="col-md-4 w-grid">
						<div className="work-grid">
							<h3>2017 - 2018</h3>
							<div className="work-grid-info">
								<h4>Keyrus</h4>
								<h5>Front-end Developer</h5>
								<p>Sao Paulo / Sao Paulo - Brazil</p>
								<p>An international player in performance management consultancy and technologies.</p>
								<a href="http://www.keyrus.com/" target="_blank" rel="noopener noreferrer">http://www.keyrus.com/</a>
								<p>Java web development, Spring, JSTL, Version control, Scrum, Less, Grunt, Regex, Node.js, Ajax, Bootstrap</p>
							</div>
						</div>
					</div>
					<div className="col-md-4 w-grid">
						<div className="work-grid">
							<h3>2016 - 2017</h3>
							<div className="work-grid-info">
								<h4>Viewit Mobile</h4>
								<h5>Developer</h5>
								<p>Sao Paulo / Sao Paulo - Brazil</p>
								<p>Work with focus on improving m-commerce performance.</p>
								<a href="http://www.viewit.com.br/" target="_blank" rel="noopener noreferrer">http://www.viewit.com.br/</a>
								<p>Node.js, Version control, Java web development, Mobile web pages, Handlebars.js, Apache Velocity Project, Jetty, Regex, Ajax, Bootstrap, SASS</p>
							</div>
						</div>
					</div>
					<div className="col-md-4 w-grid">
						<div className="work-grid">
							<h3>2014 - 2015</h3>
							<div className="work-grid-info">
								<h4>Usatell Telecom</h4>
								<h5>Computer engineer</h5>
								<p>Praia Grande / Sao Paulo - Brazil</p>
								<p>Consultancy for the corporate market, focused on reducing the costs of phone calls.</p>
								<a href="http://www.usatell.com.br/usatell/" target="_blank" rel="noopener noreferrer">http://www.usatell.com.br/usatell/</a>
								<p>JavaScript, SQL Server, Datebase, VPN Security Platforms, Phone systems, Customer support, Computer network</p>
							</div>
						</div>
					</div>
					<div className="clearfix"></div>
				</div>
				<div className="work-grids">
					<div className="col-md-6 w-grid">
						<div className="work-grid">
							<h3>2012 - 2013</h3>
							<div className="work-grid-info">
								<h4>Freelancer</h4>
								<h5>Web Designer</h5>
								<p>Praia Grande / Sao Paulo - Brazil</p>
								<p>JavaScript, HTML, CSS, Designed and developed websites, Testing sites, Video edition, Marketing materials, Custom web pages, Motion design</p>
							</div>
						</div>
					</div>
					<div className="col-md-6 w-grid">
						<div className="work-grid">
							<h3>2011 - 2012</h3>
							<div className="work-grid-info">
								<h4>Nota Control Tecnologia Ltda</h4>
								<h5>Website Administrator</h5>
								<p>Praia Grande / Sao Paulo - Brazil</p>
								<a href="https://www.notacontrol.com.br/" target="_blank" rel="noopener noreferrer">https://www.notacontrol.com.br/</a>
								<p>JavaScript, HTML, CSS, Tributary administration, Customer support, Public administration</p>
							</div>
						</div>
					</div>
					<div className="clearfix"></div>
				</div>
			</div>
		</div>
	);
}