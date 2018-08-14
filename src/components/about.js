import React from 'react';
import iconAbout from "../images/about.png";

export default function About(){
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
						<li><a className="fb" href="https://www.facebook.com/diegorochachagas" target="_blank" rel="noopener noreferrer"><span></span></a></li>
						<li><a className="twit" href="https://twitter.com/diegorchagas" target="_blank" rel="noopener noreferrer"><span></span></a></li>
						<li><a className="in" href="https://www.linkedin.com/in/diegorchagas/" target="_blank" rel="noopener noreferrer"><span></span></a></li>
						<li><a className="insta" href="https://www.instagram.com/diegorchagas/" target="_blank" rel="noopener noreferrer"><span></span></a></li>
						<li><a className="git" href="https://github.com/diegochagas" target="_blank" rel="noopener noreferrer"><span></span></a></li>
						<li><a className="you" href="https://www.youtube.com/diegorchagas" target="_blank" rel="noopener noreferrer"><span></span></a></li>
					</ul>
				</div>
			</div>
			<div className="about-back"></div>
		</div>
	);
}