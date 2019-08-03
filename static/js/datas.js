const getTitlesData = () => {
    const titles = ['Diego Chagas', 'Developer', 'Video editor', 'Freelancer'];
    return titles;
}

const getSocialMediaLinksData = () => {
    const socialMedia = [
        {className: "in", url: "https://www.linkedin.com/in/diegorchagas/"},
        {className: "git", url: "https://github.com/diegochagas"},
        {className: "fb", url: "https://www.facebook.com/diegorochachagas"},
        {className: "twit", url: "https://twitter.com/diegorchagas"},
        {className: "insta", url: "https://www.instagram.com/diegorchagas/"},
        {className: "you", url: "https://www.youtube.com/diegorchagas"}
    ];
    return socialMedia;
}


const getSkillsData = () => {
    const skills = [
        { name: "HTML/HTML5", yearsOfExperience: calcTimeOfExperience(1, 4, 2016) },
        { name: "CSS/CC3", yearsOfExperience: calcTimeOfExperience(1, 4, 2016) },
        { name: "JavaScript", yearsOfExperience: calcTimeOfExperience(1, 4, 2016) },
        { name: "React/Redux", yearsOfExperience: calcTimeOfExperience(1, 6, 2018) },
        { name: "Node.js", yearsOfExperience: calcTimeOfExperience(12, 11, 2018) },
        { name: "Sass/Less", yearsOfExperience: calcTimeOfExperience(1, 4, 2016) },
        { name: "jQuery/Ajax", yearsOfExperience: calcTimeOfExperience(1, 4, 2016, 4, 5, 2018) },
        { name: "Angular", yearsOfExperience: calcTimeOfExperience(12, 11, 2018) },
        { name: "Bootstrap/ Materialize", yearsOfExperience: calcTimeOfExperience(1, 4, 2016) },
        { name: "Photoshop", yearsOfExperience: calcTimeOfExperience(1, 6, 2012) },
        { name: "Premiere", yearsOfExperience: calcTimeOfExperience(6, 9, 2012) },
        { name: "After Effects", yearsOfExperience: calcTimeOfExperience(6, 9, 2013) },
        { name: "Java/JSTL", yearsOfExperience: calcTimeOfExperience(1, 4, 2016, 7, 4, 2017) },
        { name: "MySQL/SQL", yearsOfExperience: calcTimeOfExperience(1, 4, 2016, 7, 4, 2017) },
    ];
    return skills;
}

const calcTimeOfExperience = (
        startDay, 
        startMonth, 
        startYear, 
        endDay = new Date().getDate(),
        endMonth = new Date().getMonth() + 1,
        endYear = new Date().getFullYear()
    ) => {
    const startDate = new Date(startYear, startMonth - 1, startDay);
    const endDate = new Date(endYear, endMonth - 1, endDay);
    const differenceBetweenDates = endDate - startDate;
    const differenceInDays = Math.ceil(differenceBetweenDates / (1000 * 60 * 60 * 24));
    const differenceInYears = Math.ceil(differenceInDays / 365);
    return differenceInYears;
}

const getGraduationsData = () => {
    const graduations = [
        {beginYear: "2008", endYear: "2011", status: "Graduated", degree: "BACHELOR DEGREE OF INFORMATION SYSTEMS",
            institution: "Coast South Paulista University", local: "Praia Grande / Sao Paulo - Brazil",
            url: "http://www.fals.com.br/"},
        {beginYear: "2014", endYear: "2015", status: "Graduated", degree: "CERTIFICATE OF COMPUTER ENGINEER",
            institution: "State Technical School", local: "Praia Grande / Sao Paulo - Brazil",
            url: "https://www.cps.sp.gov.br/"},
        /*{beginYear: "2012", endYear: "2013", status: "Graduated", degree: "DOCTOR DEGREE OF COMPUTER SCIENCE",
            institution: "Auckalnd University", local: "Auckland - New Zealand",
            url: "https://www.auckland.ac.nz/en.html"},*/
    ];
    return graduations;
}

const getJobsData = () => {
    const jobs = [
        {beginYear: "2019", endYear: "Present", company: "Atlas Quantum", role: "Senior Developer", local: "Sao Paulo / Sao Paulo - Brazil", description: "The largest crypto-currency company in Latin America.", url: "https://atlasquantum.com/", tools: "Angular, AWS, Firebase, Sass, JavaScript, Node.js, Materialize"},
        {beginYear: "2018", endYear: "2019", company: "Avanade", role: "Software Engineer", local: "Sao Paulo / Sao Paulo - Brazil", description: "Avanade is the leading provider of innovative digital and cloud services, business solutions and design-led experiences for its clients, delivered through the power of people and the Microsoft ecosystem.", url: "https://www.avanade.com/en", tools: "React, Angular, Version control, Scrum, Sass, JavaScript, Node.js, Bootstrap"},
        {beginYear: "2017", endYear: "2018", company: "Keyrus", role: "Front-end Developer", local: "Sao Paulo / Sao Paulo - Brazil", description: "An international player in performance management consultancy and technologies.", url: "http://www.keyrus.com/", tools: "Java web development, Spring, JSTL, Version control, Scrum, Less, Grunt, Regex, Node.js, Bootstrap"},
        {beginYear: "2016", endYear: "2017", company: "Viewit Mobile", role: "Developer", local: "Sao Paulo / Sao Paulo - Brazil", description: "Work with focus on improving m-commerce performance.", url: "http://www.viewit.com.br/", tools: "Node.js, Version control, Java web development, Mobile web pages, Handlebars.js, Apache Velocity Project, Jetty, Regex, Bootstrap, SASS"},
        {beginYear: "2014", endYear: "2015", company: "Usatell Telecom", role: "Computer engineer", local: "Praia Grande / Sao Paulo - Brazil", description: "Consultancy for the corporate market, focused on reducing the costs of phone calls.", url: "http://www.usatell.com.br/usatell/", tools: "JavaScript, SQL Server, Datebase, VPN Security Platforms, Phone systems, Customer support, Computer network"},
        {beginYear: "2012", endYear: "2013", company: "Freelancer", role: "Video Editor", local: "Praia Grande / Sao Paulo - Brazil", description: "Video edition and motion design for some Youtube channels and companies with Photoshop, Premiere and After Effects.", url: "https://www.freelancer.co.nz/", tools: "JavaScript, HTML, CSS, Designed and developed websites, Testing sites, Video edition, Marketing materials, Custom web pages, Motion design"}
    ];
    return jobs;
}

const getPortfoliosData = () => {
    const portfolios = [
        {imgSrc: "static/media/banner2.jpg", company: "Santander", role: "SOFTWARE ENGINEER", url: "https://www.santander.com.br/"},
        {imgSrc: "static/media/banner5.jpg", company: "Carrefour", role: "FRONT-END", url: "https://www.carrefour.com.br/"},
        {imgSrc: "static/media/banner4.jpg", company: "Grand Optical", role: "FRONT-END", url: "https://www.grandoptical.com/fr/"},
        {imgSrc: "static/media/banner1.jpg", company: "Underarmour", role: "FRONT-END", url: "https://www.underarmour.com.br/pt-br/"},
        {imgSrc: "static/media/banner3.jpg", company: "Nestlé", role: "FRONT-END", url: "https://www.nestle.com.br/"},
        {imgSrc: "static/media/banner6.jpg", company: "Pacifika", role: "FRONT-END", url: "https://www.pacifika.com/"}
    ];
    return portfolios;
}
