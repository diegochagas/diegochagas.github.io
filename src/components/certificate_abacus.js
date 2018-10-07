import React from 'react';
import abacusEnglishCertificate from "../images/abacus-english-certificate-edit.jpg";

export default function CertificateAbacus(){
	return(
		<div className="certificate">
			<img src={abacusEnglishCertificate} alt="abacus english course certificate" className="abacus"/>
		</div>
	);
}