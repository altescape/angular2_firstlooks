import {Component, Template, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'greeting'
})
@Template({
  inline: '<h1>Hello {{ greeting }}</h1>'
})

class GreetingComponent {
  constructor() {
    this.greeting = "Test Name";
  }
}

bootstrap(GreetingComponent);
