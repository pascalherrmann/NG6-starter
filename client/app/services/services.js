import angular from 'angular';

import Products from './productService/productService';

let servicesModule = angular.module('app.services', [
  Products
])
.name;

export default servicesModule;
