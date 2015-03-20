import {Component, Template, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'my-title'
})
@Template({
  url: 'title.html'
})

class TitleComponent {
  constructor() {
    this.title = "Test Title";
  }
}

bootstrap(TitleComponent);
