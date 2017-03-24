import angular from 'angular';
import uiRouter from 'angular-ui-router';
import demoWebsiteComponent from './demoWebsite.component';

let demoWebsiteModule = angular.module('demoWebsite', [
  uiRouter
])

.component('demoWebsite', demoWebsiteComponent)

.name;

export default demoWebsiteModule;
