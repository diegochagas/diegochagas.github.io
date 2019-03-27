import React, {Component} from 'react';
import iconPort from "../images/port.png";
import portfolio1 from "../images/banner1.jpg";
import portfolio2 from "../images/banner2.jpg";
import portfolio3 from "../images/banner3.jpg";
import portfolio6 from "../images/banner6.jpg";
import portfolio7 from "../images/banner7.jpg";
import portfolio8 from "../images/banner8.jpg";

export default class Portfolio extends Component{
	renderWork(portfolio, company, role, site){
		return(
			<figure className="col-md-4 gallery-grid gallery1">
				<img src={portfolio} className="img-responsive" alt="print of the page"/>
				<figcaption className="textbox">
					<h4>{company}</h4>
					<p>{role}</p>
					<div className="button"><a href={site} target="_blank" rel="noopener noreferrer">VIEW</a></div>
				</figcaption>
			</figure>
		);
	}

	render(){
		return(
			<section className="gallery-section text-center" id="portfolio">
				<div className="container">
					<h3>PORTFOLIO</h3>
					<div className="strip text-center"><img src={iconPort} alt="icon portfolio"/></div>
					<div className="gallery-grids">
						<div className="top-gallery">
							{this.renderWork(portfolio8, "Carrefour", "FRONT-END", "https://www.carrefour.com.br/")}
							{this.renderWork(portfolio7, "Grand Optical", "FRONT-END", "https://www.grandoptical.com/fr/")}
							{this.renderWork(portfolio1, "Underarmour", "MOBILE DEVELOPING", "https://www.underarmour.com.br/pt-br/")}
							{this.renderWork(portfolio2, "Giuliana Flores", "MOBILE DEVELOPING", "http://m2.giulianaflores.com.br/")}
							{this.renderWork(portfolio3, "Nestlé", "MOBILE DEVELOPING", "https://www.nestle.com.br/")}
							{this.renderWork(portfolio6, "Pacifika", "FRONT-END", "https://www.pacifika.com/")}
							<div className="clearfix"> </div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}