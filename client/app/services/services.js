import angular from 'angular';

import Products from './products/products';
import Ratings from './ratings/ratings';
import Portfolios from './portfolios/portfolios';

let servicesModule = angular.module('app.services', [
  Products, Ratings, Portfolios
])
.name;

export default servicesModule;
