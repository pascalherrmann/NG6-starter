import angular from 'angular';
import ratingCommentComponent from './ratingComment.component';

let ratingCommentModule = angular.module('ratingComment', [])
.component('ratingComment', ratingCommentComponent)
.name;

export default ratingCommentModule;
