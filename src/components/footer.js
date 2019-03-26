import React from 'react';
import {Link} from 'react-scroll';

export default function Footer(){
	return(
		<footer>
			<div className="footer">
				<div className="container">
					<p>Copyright &copy; 2018 Diego Chagas. Template based on <a href="http://w3layouts.com/"> W3layouts</a></p>
				</div>
			</div>
			<aside>
				<Link className="toTop" to="home" spy={true} smooth={true} duration={1000}>
					<span className="toTopHover"></span>To Top
				</Link>
			</aside>
		</footer>
	);
}