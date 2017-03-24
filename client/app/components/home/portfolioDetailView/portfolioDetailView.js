import angular from 'angular';
import uiRouter from 'angular-ui-router';
import portfolioDetailViewComponent from './portfolioDetailView.component';

let portfolioDetailViewModule = angular.module('portfolioDetailView', [
  uiRouter
])

.component('portfolioDetailView', portfolioDetailViewComponent)

.name;

export default portfolioDetailViewModule;
