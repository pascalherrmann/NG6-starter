import angular from 'angular';
import uiRouter from 'angular-ui-router';

import PortfolioOverview from './portfolioOverview.component';

let portfolioOverviewModule = angular.module('portfolioOverview', [
  uiRouter, 'productService'
])

.component('portfolioOverview', PortfolioOverview)

.name;

export default portfolioOverviewModule;
