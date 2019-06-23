const loadPortfolio = () => {
    const portfolios = getPortfoliosData();
    const portfolioElements = buildPortfolioElements(portfolios);
    addPortofolios(portfolioElements);
}

const buildPortfolioElements = portfolios => {
    const portfolioElements = portfolios.reduce((previousValue, portfolio) => {
        const element = `
            <figure class="gallery-grid gallery1">
                <img src=${portfolio.imgSrc} class="img-responsive" alt="print of the page"/>
                <figcaption class="textbox">
                    <h4>${portfolio.company}</h4>
                    <p>${portfolio.role}</p>
                    <div class="button">
                        <a href=${portfolio.url} target="_blank" rel="noopener noreferrer">VIEW</a>
                    </div>
                </figcaption>
            </figure>
        `;
        return previousValue + element;
    }, "");
    return portfolioElements;
}

const addPortofolios = portfolioElements => {
    document.querySelector("#portfolio-grids").innerHTML = portfolioElements;
}
