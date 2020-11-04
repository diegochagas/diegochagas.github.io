window.onload = () => {
    loadCertifications();
    loadSocialMedia();
    loadWork();
    loadPortfolio();
    loadEducation();
    loadSkills();
}

const goToTop = () => document.documentElement.scrollTop = 0;

document.querySelectorAll("#navbar-menu .nav-item").forEach(anchor => {
    anchor.addEventListener('click', () => {
        document.getElementById("buttonMenu").click();
    });
});