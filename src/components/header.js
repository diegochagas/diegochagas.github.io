import React, {Component} from 'react';
import Typed from 'typed.js';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import photoProfile from '../images/photo-profile.jpeg';

class TypedTitle extends Component{
	componentDidMount(){
		const {strings} = this.props;
		const options = {
			strings: strings,
			typeSpeed: 100,
			backSpeed: 100,
			loop: true
		};
		this.typed = new Typed(this.el, options); 
	}

	componentWillUnmount(){
		this.typed.destroy();
	}
	render(){
		return(
			<span style={{whiteSpace: 'pre'}} ref={(el) => {this.el = el}}/>
		);
	}
}


export default function Header() {
	return(
		<header className="banner" id="home">
			<Navbar className="box_content_center">
				<Navbar.Header>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav className="menu_box_list">
						<NavItem eventKey={1} href="#home">
							<span>Home</span>
						</NavItem>
						<NavItem href="#about">
							<span>About</span>
						</NavItem>
						<NavItem href="#portfolio">
							<span>Portfolio</span>
						</NavItem>
						<NavItem href="#contact">
							<span>Contact</span>
						</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			<div className="banner-info">
				<div className="banner-left">
					<img src={photoProfile} alt=""/>
				</div>
				<div className="banner-right">
					<h1>
						<span>I’M </span>
						<TypedTitle
							strings={[
								'Diego Chagas',
								'Developer',
								'Video editor',
								'Freelancer'
							]}
						/>
					</h1>
					<div className="border"></div>
					<h2>Front-End Developer</h2>
					<a href="https://docs.google.com/document/d/1MNtyoAhvLY5H_Sy8gfAwZgpaMJ4dlOln7Nftb9InOw8/" target="_blank" rel="noopener noreferrer">Download my resume</a>
				</div>
				<div className="clearfix"></div>
			</div>
    	</header>
	);
}