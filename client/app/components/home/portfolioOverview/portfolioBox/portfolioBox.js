import angular from 'angular';
import uiRouter from 'angular-ui-router';
import portfolioBoxComponent from './portfolioBox.component';

let portfolioBoxModule = angular.module('portfolioBox', [
  uiRouter
])

.component('portfolioBox', portfolioBoxComponent)

.name;

export default portfolioBoxModule;
