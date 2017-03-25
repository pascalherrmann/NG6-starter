import angular from 'angular';

import Products from './products/products';
import Ratings from './ratings/ratings';
import Portfolios from './portfolios/portfolios';
import Users from './users/users';

let servicesModule = angular.module('app.services', [
  Products, Ratings, Portfolios, Users
])
.name;

export default servicesModule;
