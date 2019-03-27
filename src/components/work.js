import React, {Component} from 'react';
import iconWork from "../images/work.png";

export default class Work extends Component{
  render(){
    const jobs = [
      {beginYear: "2018", endYear: "Present", company: "Avanade", role: "Software Engineer", local: "Sao Paulo / Sao Paulo - Brazil", description: "An international player in performance management consultancy and technologies.", url: "https://www.avanade.com/en", tools: "Angular, React, Version control, Scrum, Sass, JavaScript, Node.js, Ajax, Bootstrap"},
      {beginYear: "2017", endYear: "2018", company: "Keyrus", role: "Front-end Developer", local: "Sao Paulo / Sao Paulo - Brazil", description: "An international player in performance management consultancy and technologies.", url: "http://www.keyrus.com/", tools: "Java web development, Spring, JSTL, Version control, Scrum, Less, Grunt, Regex, Node.js, Ajax, Bootstrap"},
      {beginYear: "2016", endYear: "2017", company: "Viewit Mobile", role: "Developer", local: "Sao Paulo / Sao Paulo - Brazil", description: "Work with focus on improving m-commerce performance.", url: "http://www.viewit.com.br/", tools: "Node.js, Version control, Java web development, Mobile web pages, Handlebars.js, Apache Velocity Project, Jetty, Regex, Ajax, Bootstrap, SASS"},
      {beginYear: "2014", endYear: "2015", company: "Usatell Telecom", role: "Computer engineer", local: "Praia Grande / Sao Paulo - Brazil", description: "Consultancy for the corporate market, focused on reducing the costs of phone calls.", url: "http://www.usatell.com.br/usatell/", tools: "JavaScript, SQL Server, Datebase, VPN Security Platforms, Phone systems, Customer support, Computer network"},
      {beginYear: "2012", endYear: "2013", company: "Freelancer", role: "Web Designer", local: "Praia Grande / Sao Paulo - Brazil", description: "Developed content management system with custom templates language.", url: "https://www.freelancer.co.nz/", tools: "JavaScript, HTML, CSS, Designed and developed websites, Testing sites, Video edition, Marketing materials, Custom web pages, Motion design"},
      {beginYear: "2011", endYear: "2012", company: "Nota Control Tecnologia Ltda", role: "Website Administrator", local: "Praia Grande / Sao Paulo - Brazil", description: "Customer support to online manager systems of tributary administrations.", url: "https://www.notacontrol.com.br/", tools: "JavaScript, HTML, CSS, Tributary administration, Customer support, Public administration"}
    ];

		return(
			<section className="work text-center">
				<div className="container">
					<div className="work-info">
						<h3>WORK EXPERIENCE</h3>
					</div>
					<div className="strip text-center"><img src={iconWork} alt="icon work"/></div>
					<div className="work-grids">
            {jobs.map(job => {
              return (
                <div className="work-grid">
                  <h4>{`${job.beginYear} - ${job.endYear}`}</h4>
                  <div className="work-grid-info">
                    <h3>{job.company}</h3>
                    <h5>{job.role}</h5>
                    <p>{job.local}</p>
                    <p>{job.description}</p>
                    <a href={job.url} target="_blank" rel="noopener noreferrer">Company Website</a>
                    <p>{job.tools}</p>
                  </div>
                </div>
            )})}
					</div>
				</div>
			</section>
		);
	}
}