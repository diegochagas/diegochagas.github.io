import React from 'react';
import iconDown from "../images/down.png";

export default function Resume(){
	return(
		<div className="resume text-center">
			<div className="container">
				<div className="strip text-center"><a href="https://docs.google.com/document/d/1MNtyoAhvLY5H_Sy8gfAwZgpaMJ4dlOln7Nftb9InOw8/" target="_blank" rel="noopener noreferrer"><img src={iconDown} alt="icon download"/></a></div>
				<div className="down"><a href="https://docs.google.com/document/d/1MNtyoAhvLY5H_Sy8gfAwZgpaMJ4dlOln7Nftb9InOw8/" target="_blank" rel="noopener noreferrer">Download My Resume</a></div>
			</div>
		</div>
	);
}