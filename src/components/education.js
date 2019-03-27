import React, {Component} from 'react';
import iconEdu from "../images/edu.png";
import upArrow from '../images/arrow.png';

export default class Education extends Component {
	render(){
		const graduations = [
			{beginYear: "2008", endYear: "2011", status: "Graduated", degree: "BACHELOR DEGREE OF INFORMATION SYSTEMS",
				institution: "Coast South Paulista University", local: "Praia Grande / Sao Paulo - Brazil",
				url: "http://www.fals.com.br/"},
			{beginYear: "2014", endYear: "2015", status: "Graduated", degree: "CERTIFICATE OF COMPUTER ENGINEER",
				institution: "State Technical School", local: "Praia Grande / Sao Paulo - Brazil",
				url: "https://www.cps.sp.gov.br/"},
			/*{beginYear: "2012", endYear: "2013", status: "Graduated", degree: "DOCTOR DEGREE OF COMPUTER SCIENCE",
				institution: "Auckalnd University", local: "Auckland - New Zealand",
				url: "https://www.auckland.ac.nz/en.html"},*/
		];

		return(
			<section className="education">
				<div className="education text-center">
					<div className="container">
						<div className="edu-info">
							<h3>EDUCATION</h3>
						</div>
						<div className="strip text-center"><img src={iconEdu} alt="icon education"/></div>
						<div className="edu-grids">
							{graduations.map(graduation => {
								return(
									<div className="edu-grid" key={graduation.degree}>
                    <div className="edu-grid-header">
                      <p>{`${graduation.beginYear} - ${graduation.endYear}`}</p>
                      <span>{graduation.status}</span>
                    </div> 
										<div className="edu-grid-body">
										  <img src={upArrow} alt="up arrow"/>
											<div className="edu-grid-master edu-border">
												<h4>{graduation.degree}</h4>
												<h5>{graduation.institution}</h5>
											</div>
											<div className="edu-grid-info">
												<h5>
													<div>{graduation.local}</div>
													<div>
														<a href={graduation.url} target="_blank" rel="noopener noreferrer">Institution Website</a>
													</div>
												</h5>
											</div>
										</div>
									</div>
								)
							})}
						</div>
					</div>
				</div>
				<div className="strip-border"><p></p></div>
			</section>
		);
	}
}