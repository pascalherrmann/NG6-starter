class PortfolioDetailViewController {
  constructor($stateParams, portfolios) {
    const round = (n) => Math.round(n * 10) / 10;
    this.id = $stateParams.id;
    this.portfolio = {name: '', description: ''};
    portfolios.get($stateParams.id).then(
      // response => console.log(response),
      response => this.portfolio = response.data,
      error => console.log(error)
    );
    this.votes = [0, 2, 3, 17, 29];
    this.maxVotes = () => Math.max(...this.votes);
    this.totalVotes = () => this.votes.reduce((acc, val) => acc + val);
    this.totalScore = () => round(this.votes.reduce((acc, val, i) => acc + (i + 1) * val) / this.totalVotes());
    this.barWidth = (i) => ((this.votes[i-1] / this.maxVotes()) * 100) - 20;
  }
}

PortfolioDetailViewController.$inject = ['$stateParams','portfolios'];

export default PortfolioDetailViewController;
