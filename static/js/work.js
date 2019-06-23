const loadWork = () => {
    const jobs = getJobsData();
    const jobElements = buildJobElements(jobs);
    addJobs(jobElements);
}

const buildJobElements = jobs => {
    const jobElements = jobs.reduce((previousValue, job) => {
        const element = `
            <div class="work-grid">
                <h4>${job.beginYear} - ${job.endYear}</h4>
                <div class="work-grid-info">
                <h3>${job.company}</h3>
                <h5>${job.role}</h5>
                <p>${job.local}</p>
                <p>${job.description}</p>
                <a href=${job.url} target="_blank" rel="noopener noreferrer">Company Website</a>
                <p>${job.tools}</p>
                </div>
            </div>
        `;
        return previousValue + element;
    }, "");
    return jobElements;
}
    
const addJobs = jobElements => {
    document.querySelector("#work-grids").innerHTML = jobElements;
}