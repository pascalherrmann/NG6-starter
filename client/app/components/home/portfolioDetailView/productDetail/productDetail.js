import angular from 'angular';
import productDetailComponent from './productDetail.component';

// import ProductService from '../../../../services/productService/productService';

let productDetailModule = angular.module('productDetail', [
  // ProductService
])

.component('productDetail', productDetailComponent)

.name;

export default productDetailModule;
