import DemoWebsiteModule from './demoWebsite'
import DemoWebsiteController from './demoWebsite.controller';
import DemoWebsiteComponent from './demoWebsite.component';
import DemoWebsiteTemplate from './demoWebsite.html';

describe('DemoWebsite', () => {
  let $rootScope, makeController;

  beforeEach(window.module(DemoWebsiteModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new DemoWebsiteController();
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
      expect(DemoWebsiteTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = DemoWebsiteComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(DemoWebsiteTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(DemoWebsiteController);
      });
  });
});
