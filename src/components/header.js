import React, {Component} from 'react';
import Typed from 'typed.js';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import photoProfile from '../images/photo-profile.jpeg';
import {Link} from 'react-scroll';

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

export default class Header extends Component {
	triggerClick(){
		document.getElementById("buttonMenu").click();
	}

	renderNavItem(item, number){
		return(
			<NavItem eventKey={number} componentClass="span">
				<Link className="" to={item} spy={true} smooth={true} duration={1000} onClick={this.triggerClick}>
					{item}
		        </Link>
			</NavItem>
		);
	}

	render(){
		return(
			<header className="banner" id="home">
				<Navbar className="box_content_center" fixedTop>
					<Navbar.Header>
						<Navbar.Toggle id="buttonMenu"/>
					</Navbar.Header>
					<Navbar.Collapse>
						<Nav className="menu_box_list">
							{this.renderNavItem("home", 1)}
							{this.renderNavItem("about", 2)}
							{this.renderNavItem("portfolio", 3)}
							{this.renderNavItem("contact", 4)}
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

}