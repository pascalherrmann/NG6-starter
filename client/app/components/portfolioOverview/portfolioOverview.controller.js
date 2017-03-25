class PortfolioOverviewController {
    constructor(portfolios) {

        var serviceMock = [
            {
                id: 23423,
                name: "Student",
                stars: 4,
                description: "Die perfekte Versicherung für junge Leute zum günstigen Preis.",
                ratings: 32,
                products: ["reisekranken"]
            },
            {
                "name": "Student Plus",
                stars: 3,
                ratings: 4,
                description: "Die perfekte Versicherung für junge Leute mit eigener Wohnung.",
                products: ["leben", "hausrat"]
            },
            {
                "name": "Junge Leute Komplettpaket",
                stars: 5,
                description: "Die perfekte Versicherung für junge Leute die alles brauchen.",
                ratings: 48,
                products: ["leben", "hausrat", "reisekranken", "test"]
            }]

        this.test = {
            name: '',
            description: ''
        };


    this.analyze = function () {

        portfolios.listByTwitterUsername(this.twitterUsername).then(
            response => console.log(response),
            response => this.portfolios = response.data;
            //response => this.portfolios = serviceMock,
            error => console.log(error)
        );

    };


    }
}

PortfolioOverviewController.$inject = ['portfolios'];

export default PortfolioOverviewController;
