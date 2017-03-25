import angular from 'angular';

import Portfolios from './portfolios.factory';

let portfolioServiceModule = angular.module('portfolios', [])
.factory('portfolios', ['$http', Portfolios])
.name;

export default portfolioServiceModule;
