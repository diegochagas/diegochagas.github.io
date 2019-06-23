const loadSocialMedia = () => {
    const links = getSocialMediaLinksData();
    const socialMediaElements = buildSocialMediaElements(links);
    addSocialMedia(socialMediaElements);
}

const buildSocialMediaElements = links => {
    const socialMediaElements = links.reduce((previousValue, link) => {
        const element = `
            <li>
                <a 
                    class=${link.className} 
                    href=${link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    <span></span>
                </a>
            </li>
        `;
        return previousValue + element;
    }, "");
    return socialMediaElements;
}

const addSocialMedia = socialMediaElements => {
    document.getElementById("social-media").innerHTML = socialMediaElements;
}