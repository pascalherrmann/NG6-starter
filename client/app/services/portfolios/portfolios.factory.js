const PortfoliosFactory = ($http) => {
  return {
    list: () => $http.get('/portfolios'), //'http://portfolio-service.mybluemix.net/portfolios'
    listByTwitterUsername: (twitterUsername) => $http.get('/portfolios/user/'+twitterUsername), //'http://portfolio-service.mybluemix.net/portfolios'
   // listByTwitterUsername: (twitterUsername) => $http.get('/portfolios/'), //'http://portfolio-service.mybluemix.net/portfolios'
    get: (id) => $http.get('/portfolios/'+id)
  }
};

PortfoliosFactory.$inject = '$scope';

export default PortfoliosFactory;
