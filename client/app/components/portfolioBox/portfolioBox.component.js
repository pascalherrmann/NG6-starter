import template from './portfolioBox.html';
import controller from './portfolioBox.controller';
import './portfolioBox.scss';

let portfolioBoxComponent = {
  restrict: 'E',
  bindings: {
      portfolio: '<'
  },
  template,
  controller
};

export default portfolioBoxComponent;



