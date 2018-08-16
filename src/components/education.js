import React, {Component} from 'react';
import iconEdu from "../images/edu.png";
import upArrow from '../images/arrow.png';

export default class Education extends Component {
	render(){
		let graduations = [
			{beginYear: "2008", endYear: "2011", status: "Graduated", degree: "BACHELOR DEGREE OF INFORMATION SYSTEMS",
				institution: "Coast South Paulista University", local: "Praia Grande / Sao Paulo - Brazil",
				url: "http://www.fals.com.br/"},
			{beginYear: "2014", endYear: "2015", status: "Graduated", degree: "CERTIFICATE OF COMPUTER ENGINEER",
				institution: "State Technical School", local: "Praia Grande / Sao Paulo - Brazil",
				url: "http://www.cps.sp.gov.br/etec/escolas/baixada-santista/etec-praia-grande.asp"},
			/*{beginYear: "2012", endYear: "2013", status: "Graduated", degree: "MASTER DEGREE OF COMPUTER SCIENCE",
				institution: "Auckalnd University", local: "Auckland - New Zealand",
				url: "https://www.auckland.ac.nz/en.html"},*/
		];

		return(
			<div className="education">
				<div className="education text-center">
					<div className="container">
						<div className="edu-info">
							<h3>EDUCATION</h3>
						</div>
						<div className="strip text-center"><img src={iconEdu} alt="icon education"/></div>
						<div className="edu-grids">
							{graduations.map(graduation => {
								return(
									<div className="col-md-6 edu-grid" key={graduation.degree}>
										<p>{`${graduation.beginYear} - ${graduation.endYear}`}</p>
										<span>{graduation.status}</span>
										<img src={upArrow} alt="up arrow"/>
										<div className="edu-border">
											<div className="edu-grid-master">
												<h3>{graduation.degree}</h3>
												<h4>{graduation.institution}</h4>
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
							<div className="clearfix"></div>
						</div>
					</div>
				</div>
				<div className="strip-border"><p></p></div>
			</div>
		);
	}
}