class PortfolioDetailViewController {
  constructor($stateParams, portfolios, ratings) {
    const round = (n) => Math.round(n * 10) / 10;
    this.id = $stateParams.id;
    this.portfolio = {name: '', description: ''};
    ratings.list().then(
      // response => console.log(response.data),
      response => {
        this.ratings = response.data._embedded.ratings.filter(r => r.portfolioId == $stateParams.id);
        this.votes = [
          this.ratings.filter(r => r.numberOfStars == 1).length,
          this.ratings.filter(r => r.numberOfStars == 2).length,
          this.ratings.filter(r => r.numberOfStars == 3).length,
          this.ratings.filter(r => r.numberOfStars == 4).length,
          this.ratings.filter(r => r.numberOfStars == 5).length,
        ];
      },
      error => console.log(error)
    );
    portfolios.get($stateParams.id).then(
      response => this.portfolio = response.data[0],
      error => console.log(error)
    );
    this.votes = [0, 2, 3, 17, 29];
    this.maxVotes = () => Math.max(...this.votes);
    this.totalVotes = () => this.votes.reduce((acc, val) => acc + val);
    this.totalScore = () => round(this.votes.reduce((acc, val, i) => acc + (i + 1) * val) / this.totalVotes());
    this.barWidth = (i) => ((this.votes[i - 1] / this.maxVotes()) * 100) - 20;
  }
}

PortfolioDetailViewController.$inject = ['$stateParams', 'portfolios', 'ratings'];

export default PortfolioDetailViewController;
