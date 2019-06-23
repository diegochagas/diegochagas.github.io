const loadSkills = () => {
    const skills = getSkillsData();
    const skillElements = buildSkillElements(skills);
    addKills(skillElements);
}

const buildSkillElements = skills => {
    const skillElements = skills.reduce((previousValue, skill, index, arr) => {
        const percentage = `${skill.value}%`;
        const element = `
            ${index === 0 || index === 7 ? `<div class="col-sm-6">` : ""}
                <div class="row">
                    <div class="col-md-2 skills-grid">
                        <p>${skill.name}</p>
                    </div>
                    <div class="col-md-8">
                        <div class="progress">
                            <span class="progress-percent">${percentage}</span>
                            <progress class="progress-bar" value=${skill.value} max="100"></progress>
                        </div>
                    </div>
                </div>
            ${index === 6 ? `</div>` : ""}
            ${index === arr.length - 1 ? `</div><div class="clearfix"></div>` : ""}
        `;
        return previousValue + element;
    }, "");
    return skillElements;
}

const addKills = skillElements => {
    document.querySelector("#skill-grids").innerHTML = skillElements;
}