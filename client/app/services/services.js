import angular from 'angular';

import Products from './products/products';

let servicesModule = angular.module('app.services', [
  Products
])
.name;

export default servicesModule;
