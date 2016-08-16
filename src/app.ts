import {Aurelia} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Aurelia Project Baseline';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: './components/welcome/welcome',      nav: true, title: 'Welcome' },
    ]);

    this.router = router;
  }
}
