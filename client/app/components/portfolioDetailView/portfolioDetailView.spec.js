import PortfolioDetailViewModule from './portfolioDetailView'
import PortfolioDetailViewController from './portfolioDetailView.controller';
import PortfolioDetailViewComponent from './portfolioDetailView.component';
import PortfolioDetailViewTemplate from './portfolioDetailView.html';

describe('PortfolioDetailView', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PortfolioDetailViewModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PortfolioDetailViewController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(PortfolioDetailViewTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PortfolioDetailViewComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PortfolioDetailViewTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PortfolioDetailViewController);
      });
  });
});
