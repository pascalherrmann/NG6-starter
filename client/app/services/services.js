import angular from 'angular';

import Products from './products/products';
import Ratings from './ratings/ratings';

let servicesModule = angular.module('app.services', [
  Products, Ratings
])
.name;

export default servicesModule;
