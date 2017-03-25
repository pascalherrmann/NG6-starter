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

            this.loading = true

            portfolios.listByTwitterUsername(this.twitterUsername).then(
                response => {
                    this.loading = false
                    this.error = null
                    this.portfolios = response.data._embedded.portfolios
                    console.log(response.data._embedded.portfolios)

                },
                error => {
                    this.loading = false
                    this.error = error
                    console.log("ERROR!")
                    console.log(error)
                }
            );

        };


    }
}

PortfolioOverviewController.$inject = ['portfolios'];

export default PortfolioOverviewController;
