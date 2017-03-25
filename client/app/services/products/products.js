import angular from 'angular';

import Products from './products.factory';

let productServiceModule = angular.module('products', [])
.factory('products', Products)
.name;

export default productServiceModule;
