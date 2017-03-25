import template from './ratingComment.html';
import controller from './ratingComment.controller';

import './ratingComment.scss';

let ratingCommentComponent = {
  restrict: 'E',
  bindings: {
    rating: '<'
  },
  template,
  controller
};

export default ratingCommentComponent;
