const UsersFactory = ($http) => {
  return {
    get: (id) => {
      return $http.get(`/ratings/${id}`);
    }
  }
};

UsersFactory.$inject = '$scope';

export default UsersFactory;
