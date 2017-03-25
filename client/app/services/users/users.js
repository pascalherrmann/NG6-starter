import angular from 'angular';

import Users from './users.factory';

let ratingServiceModule = angular.module('users', [])
  .factory('users', ['$http', Users])
  .name;

export default ratingServiceModule;
