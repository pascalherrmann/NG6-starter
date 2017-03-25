import angular from 'angular';

import Ratings from './ratings.factory';

let ratingServiceModule = angular.module('ratings', [])
  .factory('ratings', Ratings)
  .name;

export default ratingServiceModule;
