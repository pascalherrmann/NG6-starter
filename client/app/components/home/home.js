import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

import portfolioDetailView from './portfolioDetailView/portfolioDetailView';
import portfolioOverview from './../portfolioOverview/portfolioOverview';

let homeModule = angular.module('home', [
  uiRouter,
  portfolioDetailView,
  portfolioOverview
])

  .config(($stateProvider, $urlRouterProvider) => {
    "ngInject";

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/home',
        component: 'home'
      })
      .state('portfolioOverview', {
        url: '/',
        component: 'portfolioOverview'
      })
      .state('portfolio', {
        url: '/portfolio/:id',
        component: 'portfolioDetailView'
      });
  })

  .component('home', homeComponent)

  .name;

export default homeModule;
