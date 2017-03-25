class PortfolioOverviewController {
  constructor() {
    this.name = 'portfolioOverview';

       this.portfolios = [
        {id:23423, name:"Student", stars:4, description:"Die perfekte Versicherung für junge Leute zum günstigen Preis.", ratings:32,  products:["reisekranken"]},
        {"name":"Student Plus", stars:3, ratings:4, description:"Die perfekte Versicherung für junge Leute mit eigener Wohnung.", products:["leben", "hausrat"]},
       {"name":"Junge Leute Komplettpaket", stars:5, description:"Die perfekte Versicherung für junge Leute die alles brauchen.", ratings:48, products:["leben", "hausrat", "reisekranken", "test"]},]

  this.hoveringOver = function(value) {
    this.overStar = value;
    this.percent = 100 * (value / $scope.max);
  };

  }
}

export default PortfolioOverviewController;
