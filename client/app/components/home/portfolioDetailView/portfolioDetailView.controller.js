class PortfolioDetailViewController {
  constructor($stateParams) {
    const round = (n) => Math.round(n * 10) / 10;
    this.id = $stateParams.id;
    this.votes = [0, 2, 3, 17, 29];
    this.maxVotes = () => Math.max(...this.votes);
    this.totalVotes = () => this.votes.reduce((acc, val) => acc + val);
    this.totalScore = () => round(this.votes.reduce((acc, val, i) => acc + (i + 1) * val) / this.totalVotes());
    this.barWidth = (i) => ((this.votes[i-1] / this.maxVotes()) * 100) - 20;
  }
}

PortfolioDetailViewController.$inject = ['$stateParams'];

export default PortfolioDetailViewController;
