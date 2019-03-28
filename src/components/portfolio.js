import React, {Component} from 'react';
import iconPort from "../images/port.png";
import portfolio1 from "../images/banner1.jpg";
import portfolio2 from "../images/banner2.jpg";
import portfolio3 from "../images/banner3.jpg";
import portfolio4 from "../images/banner4.jpg";
import portfolio5 from "../images/banner5.jpg";
import portfolio6 from "../images/banner6.jpg";

export default class Portfolio extends Component{
	render(){
    const portfolios = [
      {imgSrc: portfolio2, company: "Santander", role: "SOFTWARE ENGINEER", url: "https://www.santander.com.br/"},
      {imgSrc: portfolio5, company: "Carrefour", role: "FRONT-END", url: "https://www.carrefour.com.br/"},
      {imgSrc: portfolio4, company: "Grand Optical", role: "FRONT-END", url: "https://www.grandoptical.com/fr/"},
      {imgSrc: portfolio1, company: "Underarmour", role: "FRONT-END", url: "https://www.underarmour.com.br/pt-br/"},
      {imgSrc: portfolio3, company: "Nestlé", role: "FRONT-END", url: "https://www.nestle.com.br/"},
      {imgSrc: portfolio6, company: "Pacifika", role: "FRONT-END", url: "https://www.pacifika.com/"}
		];

	  return(
			<section className="gallery-section text-center" id="portfolio">
				<div className="container">
					<h3>PORTFOLIO</h3>
					<div className="strip text-center"><img src={iconPort} alt="icon portfolio"/></div>
					<div className="gallery-grids">
            {portfolios.map(portfolio => {
              return(
                <figure className="gallery-grid gallery1" key={portfolio.company}>
                  <img src={portfolio.imgSrc} className="img-responsive" alt="print of the page"/>
                  <figcaption className="textbox">
                    <h4>{portfolio.company}</h4>
                    <p>{portfolio.role}</p>
                    <div className="button"><a href={portfolio.url} target="_blank" rel="noopener noreferrer">VIEW</a></div>
                  </figcaption>
                </figure>
            )})}
					</div>
				</div>
			</section>
		);
	}
}