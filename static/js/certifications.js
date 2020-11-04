const loadCertifications = () => {
    const certifications = getCertificationsData();
    const certificationsElements = buildCertificationsElements(certifications);
    addCertifications(certificationsElements);
}

const buildCertificationsElements = certifications => {
    const certificationsElements = certifications.reduce((previousValue, certification) => {
        const element = `
            <a href=${certification.url} target="_blank">
                <img src=${certification.img} alt=${certification.description}>
            </a>
        `;
        return previousValue + element;
    }, "");
    return certificationsElements;
}

const addCertifications = certificationsElements => {
    document.getElementById("certifications").innerHTML = certificationsElements;
}