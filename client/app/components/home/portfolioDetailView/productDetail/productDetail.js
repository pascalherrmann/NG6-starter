import angular from 'angular';

import productDetailComponent from './productDetail.component';

let productDetailModule = angular.module('productDetail', [
  // ProductService
])

.component('productDetail', productDetailComponent)

.name;

export default productDetailModule;
