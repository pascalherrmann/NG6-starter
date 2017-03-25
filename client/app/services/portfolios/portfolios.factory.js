const PortfoliosFactory = ($http) => {
  return {
    list: () => $http.get('/portfolios'),
    get: (id) => $http.get(`/portfolios/${id}`)
  }
};

PortfoliosFactory.$inject = '$scope';

export default PortfoliosFactory;
