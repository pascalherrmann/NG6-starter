import PortfolioOverviewModule from './portfolioOverview'
import PortfolioOverviewController from './portfolioOverview.controller';
import PortfolioOverviewComponent from './portfolioOverview.component';
import PortfolioOverviewTemplate from './portfolioOverview.html';

describe('PortfolioOverview', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PortfolioOverviewModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PortfolioOverviewController();
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
      expect(PortfolioOverviewTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PortfolioOverviewComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PortfolioOverviewTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PortfolioOverviewController);
      });
  });
});
