import angular from 'angular';
import portfolioDetailViewComponent from './portfolioDetailView.component';

import RatingComment from './ratingComment/ratingComment';

let portfolioDetailViewModule = angular.module('portfolioDetailView', [
  RatingComment
])

  .component('portfolioDetailView', portfolioDetailViewComponent)

  .name;

export default portfolioDetailViewModule;
