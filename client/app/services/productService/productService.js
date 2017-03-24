import angular from 'angular';

import ProductService from './productService.factory';

let productServiceModule = angular.module('productService', [])
.factory('productService', ProductService)
.name;

export default productServiceModule;
