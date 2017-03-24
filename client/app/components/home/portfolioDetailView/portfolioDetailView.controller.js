class PortfolioDetailViewController {
  constructor() {
    const round = (n) => Math.round(n * 10) / 10;
    this.votes = [0, 2, 3, 17, 29];
    this.totalVotes = () => this.votes.reduce((acc, val) => acc + val);
    this.totalScore = () => round(this.votes.reduce((acc, val, i) => acc + (i + 1) * val) / this.totalVotes());
  }
}

export default PortfolioDetailViewController;
