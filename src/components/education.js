import React from 'react';
import iconEdu from "../images/edu.png";
import upArrow from '../images/arrow.png';

export default function Education(){
	return(
		<div className="education">
			<div className="education text-center">
				<div className="container">
					<div className="edu-info">
						<h3>EDUCATION</h3>
					</div>
					<div className="strip text-center"><img src={iconEdu} alt="icon education"/></div>
					<div className="edu-grids">
						<div className="col-md-6 edu-grid">
							<p>2008 - 2011</p><span>Graduated</span>
							<img src={upArrow} alt="up arrow"/>
							<div className="edu-border">
								<div className="edu-grid-master">
									<h3>BACHELOR DEGREE OF INFORMATION SYSTEMS</h3>
									<h4>Coast South Paulista University</h4>
								</div>
								<div className="edu-grid-info">
									<h5>
										<div>Faculdade do Litoral Sul Paulista (FALS)</div>
										<div>Praia Grande / Sao Paulo - Brazil</div>
									</h5>
									<a href="http://www.fals.com.br/" target="_blank" rel="noopener noreferrer">http://www.fals.com.br/</a>
								</div>
							</div>
						</div>
						<div className="col-md-6 edu-grid">
							<p>2014 - 2015</p><span>Graduated</span>
							<img src={upArrow} alt="up arrow"/>
							<div className="edu-border">
								<div className="edu-grid-master">
									<h3>CERTIFICATE OF COMPUTER ENGINEER</h3>
									<h4>State Technical School</h4>
								</div>
								<div className="edu-grid-info">
									<h5>
										<div>Escola Técnica Estadual (ETEC) de Praia Grande</div>
										<div>Praia Grande / Sao Paulo - Brazil</div>
									</h5>
									<a href="http://www.cps.sp.gov.br/etec/escolas/baixada-santista/etec-praia-grande.asp" target="_blank" rel="noopener noreferrer">http://www.cps.sp.gov.br/</a>
								</div>
							</div>
						</div>
						{/*<div className="col-md-4 edu-grid">
							<p>2012 - 2013</p><span>Graduated</span>
							<img src={upArrow} alt="up arrow"/>
							<div className="edu-border">
								<div className="edu-grid-master">
									<h3>MASTER DEGREE OF COMPUTER SCIENCE</h3>
									<h4>Oxford University</h4>
								</div>
								<div className="edu-grid-info">
									<h5>This is Photoshop's version Lorem Ipsum. 
									Well, the way they make shows is, they make one show.</h5>
								</div>
							</div>
						</div>*/}
						<div className="clearfix"></div>
					</div>
				</div>
				
			</div>
			<div className="strip-border"><p></p></div>
		</div>
	);
}