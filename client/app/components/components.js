import angular from 'angular';

import Home from './home/home';
import PortfolioList from './portfolioList/portfolioList';
import About from './about/about';

let componentModule = angular.module('app.components', [
  Home,
  PortfolioList,
  About
])

.name;

export default componentModule;
