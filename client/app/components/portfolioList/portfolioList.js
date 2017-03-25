import angular from 'angular';
import uiRouter from 'angular-ui-router';
import portfolioListComponent from './portfolioList.component';

let portfolioListModule = angular.module('portfolioList', [
  uiRouter
])

.component('portfolioList', portfolioListComponent)

.name;

export default portfolioListModule;
