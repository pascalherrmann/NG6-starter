import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

import portfolioDetailView from './portfolioDetailView/portfolioDetailView';

let homeModule = angular.module('home', [
  uiRouter,
  portfolioDetailView
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      component: 'home'
    });
})

.component('home', homeComponent)

.name;

export default homeModule;
