const loadEducation = () => {
    const graduations = getGraduationsData();
    const graduationElements = buildGraduationElements(graduations);
    addGraduations(graduationElements);
}

const buildGraduationElements = graduations => {
    const graduationElements = graduations.reduce((previousValue, graduation) => {
        const element = `
            <div class="edu-grid">
                <div class="edu-grid-header">
                    <p>${graduation.beginYear} - ${graduation.endYear}</p>
                    <span>${graduation.status}</span>
                </div> 
                <div class="edu-grid-body">
                  <img src="static/media/arrow.png" alt="up arrow"/>
                    <div class="edu-grid-master edu-border">
                        <h4>${graduation.degree}</h4>
                        <h5>${graduation.institution}</h5>
                    </div>
                    <div class="edu-grid-info">
                        <h5>
                            <div>${graduation.local}</div>
                            <div>
                                <a href=${graduation.url} target="_blank" rel="noopener noreferrer">Institution Website</a>
                            </div>
                        </h5>
                    </div>
                </div>
            </div>
        `;
        return previousValue + element;
    }, "");
    return graduationElements;
}

const addGraduations = graduationElements => {
    document.querySelector("#education-grids").innerHTML = graduationElements;
}