import React from 'react';
import iconPort from "../images/port.png";
import portfolio1 from "../images/banner1.jpg";
import portfolio2 from "../images/banner2.jpg";
import portfolio3 from "../images/banner3.jpg";
import portfolio6 from "../images/banner6.jpg";
import portfolio7 from "../images/banner7.jpg";
import portfolio8 from "../images/banner8.jpg";

export default function Portfolio(){
	return(
		<div className="gallery-section text-center" id="portfolio">
			<div className="container">
				<h3>PORTFOLIO</h3>
				<div className="strip text-center"><img src={iconPort} alt="icon portfolio"/></div>
				<div className="gallery-grids">
					<div className="top-gallery">
						<div className="col-md-4 gallery-grid gallery1">
							<img src={portfolio8} className="img-responsive" alt="/"/>
							<div className="textbox">
								<h4>Carrefour</h4>
								<p>FRONT-END</p>
								<div className="button"><a href="https://www.carrefour.com.br/" target="_blank" rel="noopener noreferrer">VIEW</a></div>
							</div>
						</div>
						<div className="col-md-4 gallery-grid gallery1">
							<img src={portfolio7} className="img-responsive" alt="/"/>
							<div className="textbox">
								<h4>Grand Optical</h4>
								<p>FRONT-END</p>
								<div className="button"><a href="https://www.grandoptical.com/fr/" target="_blank" rel="noopener noreferrer">VIEW</a></div>
							</div>
						</div>
						<div className="col-md-4 gallery-grid gallery1">
							<img src={portfolio1} className="img-responsive" alt=""/>
							<div className="textbox">
								<h4>Underarmour</h4>
								<p>MOBILE DEVELOPING</p>
								<div className="button"><a href="https://www.underarmour.com.br/pt-br/" target="_blank" rel="noopener noreferrer">VIEW</a></div>
							</div>
						</div>
						<div className="col-md-4 gallery-grid gallery1">
							<img src={portfolio2} className="img-responsive" alt="/"/>
							<div className="textbox">
								<h4>Giuliana Flores</h4>
								<p>MOBILE DEVELOPING</p>
								<div className="button"><a href="http://m2.giulianaflores.com.br/" target="_blank" rel="noopener noreferrer">VIEW</a></div>
							</div>
						</div>
						<div className="col-md-4 gallery-grid gallery1">
							<img src={portfolio3} className="img-responsive" alt="/"/>
							<div className="textbox">
								<h4>Nestlé</h4>
								<p>MOBILE DEVELOPING</p>
								<div className="button"><a href="https://www.nestle.com.br/" target="_blank" rel="noopener noreferrer">VIEW</a></div>
							</div>
						</div>
						<div className="col-md-4 gallery-grid gallery1">
							<img src={portfolio6} className="img-responsive" alt="/"/>
							<div className="textbox">
								<h4>Pacifika</h4>
								<p>FRONT-END</p>
								<div className="button"><a href="https://www.pacifika.com/" target="_blank" rel="noopener noreferrer">VIEW</a></div>
							</div>
						</div>
						<div className="clearfix"> </div>
					</div>
				</div>
			</div>
		</div>
	);
}