const UsersFactory = ($http) => {
  return {
    get: (id) => {
      return $http.get(`/users/${id}`);
    }
  }
};

UsersFactory.$inject = '$scope';

export default UsersFactory;
