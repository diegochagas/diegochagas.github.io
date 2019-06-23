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
        {name: "HTML/HTML5", value: "90"},
        {name: "CSS/CC3", value: "90"},
        {name: "JavaScript", value: "80"},
        {name: "React/Redux", value: "60"},
        {name: "Node.js", value: "70"},
        {name: "Sass/Less", value: "90"},
        {name: "jQuery/Ajax", value: "80"},
        {name: "Angular", value: "40"},
        {name: "Java", value: "60"},
        {name: "MySQL", value: "50"},
        {name: "Photoshop", value: "90"},
        {name: "Premiere", value: "80"},
        {name: "After Effects", value: "60"}
    ];
    return skills;
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
        {beginYear: "2018", endYear: "Present", company: "Avanade", role: "Software Engineer", local: "Sao Paulo / Sao Paulo - Brazil", description: "An international player in performance management consultancy and technologies.", url: "https://www.avanade.com/en", tools: "React, Angular, Version control, Scrum, Sass, JavaScript, Node.js, Ajax, Bootstrap"},
        {beginYear: "2017", endYear: "2018", company: "Keyrus", role: "Front-end Developer", local: "Sao Paulo / Sao Paulo - Brazil", description: "An international player in performance management consultancy and technologies.", url: "http://www.keyrus.com/", tools: "Java web development, Spring, JSTL, Version control, Scrum, Less, Grunt, Regex, Node.js, Ajax, Bootstrap"},
        {beginYear: "2016", endYear: "2017", company: "Viewit Mobile", role: "Developer", local: "Sao Paulo / Sao Paulo - Brazil", description: "Work with focus on improving m-commerce performance.", url: "http://www.viewit.com.br/", tools: "Node.js, Version control, Java web development, Mobile web pages, Handlebars.js, Apache Velocity Project, Jetty, Regex, Ajax, Bootstrap, SASS"},
        {beginYear: "2014", endYear: "2015", company: "Usatell Telecom", role: "Computer engineer", local: "Praia Grande / Sao Paulo - Brazil", description: "Consultancy for the corporate market, focused on reducing the costs of phone calls.", url: "http://www.usatell.com.br/usatell/", tools: "JavaScript, SQL Server, Datebase, VPN Security Platforms, Phone systems, Customer support, Computer network"},
        {beginYear: "2012", endYear: "2013", company: "Freelancer", role: "Web Designer", local: "Praia Grande / Sao Paulo - Brazil", description: "Developed content management system with custom templates language.", url: "https://www.freelancer.co.nz/", tools: "JavaScript, HTML, CSS, Designed and developed websites, Testing sites, Video edition, Marketing materials, Custom web pages, Motion design"},
        {beginYear: "2011", endYear: "2012", company: "Nota Control Tecnologia Ltda", role: "Website Administrator", local: "Praia Grande / Sao Paulo - Brazil", description: "Customer support to online manager systems of tributary administrations.", url: "https://www.notacontrol.com.br/", tools: "JavaScript, HTML, CSS, Tributary administration, Customer support, Public administration"}
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
