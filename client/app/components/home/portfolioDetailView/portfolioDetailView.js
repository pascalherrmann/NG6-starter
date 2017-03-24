import angular from 'angular';
import portfolioDetailViewComponent from './portfolioDetailView.component';

import ProductDetail from './productDetail/productDetail';
import RatingComment from './ratingComment/ratingComment';

let portfolioDetailViewModule = angular.module('portfolioDetailView', [
  ProductDetail,
  RatingComment
])

  .component('portfolioDetailView', portfolioDetailViewComponent)

  .name;

export default portfolioDetailViewModule;
