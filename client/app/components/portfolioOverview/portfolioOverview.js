import angular from 'angular';
import uiRouter from 'angular-ui-router';
import portfolioOverviewComponent from './portfolioOverview.component';

let portfolioOverviewModule = angular.module('portfolioOverview', [
  uiRouter
])

.component('portfolioOverview', portfolioOverviewComponent)

.name;

export default portfolioOverviewModule;
