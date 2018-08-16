import React, {Component} from 'react';
import iconAbout from "../images/about.png";

export default class About extends Component{
	renderSocialLinks(className, url){
		return(
			<li>
				<a className={className} href={url} target="_blank" rel="noopener noreferrer">
					<span></span>
				</a>
			</li>
		);
	}

	render(){
		return(
			<div className="about-me">
				<div className="about text-center" id="about">
					<div className="container">
						<h3>ABOUT ME</h3>
						<div className="strip text-center"><img src={iconAbout} alt="icon about"/></div>
						<p>Started as a technology professional in December 2011, but began the studies in developer technology in 2008, where worked on many projects, focused on web development. Advanced knowledge in front-end and intermediate knowledge in back-end. Before that, worked with public administration and as a freelancer in video editing and motion design. Major works using Node and Java platforms.</p>
						<p>Other highlights of my career would be:</p>
						<ul className="highlights-list">
							<li>Constructed mobile web pages, extracting the content of desktop sites, with frameworks based in JavaScript, like Node.js and Handlebars.js.</li>
							<li>Utilize extensive software development skills to develop components in JavaScript.</li>
							<li>Created landing pages with layouts construct in HTML and CSS and JSTL to the GrandOptical, optical and service of group GrandVision in France.</li>
							<li>Utilize Scrum methodology.</li>
						</ul>
						<ul>
							{this.renderSocialLinks("fb", "https://www.facebook.com/diegorochachagas")}
							{this.renderSocialLinks("twit", "https://twitter.com/diegorchagas")}
							{this.renderSocialLinks("in", "https://www.linkedin.com/in/diegorchagas/")}
							{this.renderSocialLinks("insta", "https://www.instagram.com/diegorchagas/")}
							{this.renderSocialLinks("git", "https://github.com/diegochagas")}
							{this.renderSocialLinks("you", "https://www.youtube.com/diegorchagas")}
						</ul>
					</div>
				</div>
				<div className="about-back"></div>
			</div>
		);
	}
}