const RatingsFactory = ($http) => {
  return {
    list: () => {
      return $http.get('/ratings');
    }
  }
};

RatingsFactory.$inject = '$scope';

export default RatingsFactory;
