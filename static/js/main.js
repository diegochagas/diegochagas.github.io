const portfolios = [
    {imgSrc: "static/media/banner2.jpg", company: "Santander", role: "SOFTWARE ENGINEER", url: "https://www.santander.com.br/"},
    {imgSrc: "static/media/banner5.jpg", company: "Carrefour", role: "FRONT-END", url: "https://www.carrefour.com.br/"},
    {imgSrc: "static/media/banner4.jpg", company: "Grand Optical", role: "FRONT-END", url: "https://www.grandoptical.com/fr/"},
    {imgSrc: "static/media/banner1.jpg", company: "Underarmour", role: "FRONT-END", url: "https://www.underarmour.com.br/pt-br/"},
    {imgSrc: "static/media/banner3.jpg", company: "Nestlé", role: "FRONT-END", url: "https://www.nestle.com.br/"},
    {imgSrc: "static/media/banner6.jpg", company: "Pacifika", role: "FRONT-END", url: "https://www.pacifika.com/"}
];

const portfolioElements = portfolios.reduce((previousValue, portfolio) => {
    const element = `
        <figure class="gallery-grid gallery1" key=${portfolio.company}>
            <img src=${portfolio.imgSrc} class="img-responsive" alt="print of the page"/>
            <figcaption class="textbox">
                <h4>${portfolio.company}</h4>
                <p>${portfolio.role}</p>
                <div class="button">
                    <a href=${portfolio.url} target="_blank" rel="noopener noreferrer">VIEW</a>
                </div>
            </figcaption>
        </figure>`;
    return previousValue + element;
}, "");

document.querySelector("#portfolio .gallery-grids").innerHTML = portfolioElements;