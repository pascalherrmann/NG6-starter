import angular from 'angular';
import uiRouter from 'angular-ui-router';
import productDetailComponent from './productDetail.component';

let productDetailModule = angular.module('productDetail', [
  uiRouter
])

.component('productDetail', productDetailComponent)

.name;

export default productDetailModule;
