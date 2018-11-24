import React, {Component} from 'react';
import iconWork from "../images/work.png";

export default class Work extends Component{
	renderJobs(beginYear, endYear, company, role, local, description, url, tools){
		return(
			<div className="work-grid">
				<h3>{`${beginYear} - ${endYear}`}</h3>
				<div className="work-grid-info">
					<h4>{company}</h4>
					<h5>{role}</h5>
					<p>{local}</p>
					<p>{description}</p>
					<a href={url} target="_blank" rel="noopener noreferrer">Company Website</a>
					<p>{tools}</p>
				</div>
			</div>
		);
	}

	render(){
		return(
			<div className="work text-center">
				<div className="container">
					<div className="work-info">
						<h3>WORK EXPERIENCE</h3>
					</div>
					<div className="strip text-center"><img src={iconWork} alt="icon work"/></div>
					<div className="work-grids">
						<div className="col-md-4 w-grid">
							{this.renderJobs("2017", "2018", "Keyrus", "Front-end Developer", "Sao Paulo / Sao Paulo - Brazil", "An international player in performance management consultancy and technologies.", "http://www.keyrus.com/", "Java web development, Spring, JSTL, Version control, Scrum, Less, Grunt, Regex, Node.js, Ajax, Bootstrap")}
						</div>
						<div className="col-md-4 w-grid">
							{this.renderJobs("2016", "2017", "Viewit Mobile", "Developer", "Sao Paulo / Sao Paulo - Brazil", "Work with focus on improving m-commerce performance.", "http://www.viewit.com.br/", "Node.js, Version control, Java web development, Mobile web pages, Handlebars.js, Apache Velocity Project, Jetty, Regex, Ajax, Bootstrap, SASS")}
						</div>
						<div className="col-md-4 w-grid">
							{this.renderJobs("2014", "2015", "Usatell Telecom", "Computer engineer", "Praia Grande / Sao Paulo - Brazil", "Consultancy for the corporate market, focused on reducing the costs of phone calls.", "http://www.usatell.com.br/usatell/", "JavaScript, SQL Server, Datebase, VPN Security Platforms, Phone systems, Customer support, Computer network")}
						</div>
						<div className="clearfix"></div>
					</div>
					<div className="work-grids">
						<div className="col-md-6 w-grid">
							{this.renderJobs("2012", "2013", "Freelancer", "Web Designer", "Praia Grande / Sao Paulo - Brazil", "Developed content management system with custom templates language.", "https://www.freelancer.co.nz/", "JavaScript, HTML, CSS, Designed and developed websites, Testing sites, Video edition, Marketing materials, Custom web pages, Motion design")}
						</div>
						<div className="col-md-6 w-grid">
							<div className="work-grid">
								{this.renderJobs("2011", "2012", "Nota Control Tecnologia Ltda", "Website Administrator", "Praia Grande / Sao Paulo - Brazil", "Customer support to online manager systems of tributary administrations.", "https://www.notacontrol.com.br/", "JavaScript, HTML, CSS, Tributary administration, Customer support, Public administration")}
							</div>
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
			</div>
		);
	}
}