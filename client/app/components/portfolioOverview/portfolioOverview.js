import angular from 'angular';
import uiRouter from 'angular-ui-router';
import portfolioOverviewComponent from './portfolioOverview.component';
import PortfolioBox from '../portfolioBox/portfolioBox';


let portfolioOverviewModule = angular.module('portfolioOverview', [
    uiRouter,
    PortfolioBox
])



.component('portfolioOverview', portfolioOverviewComponent)

.name;

export default portfolioOverviewModule;
