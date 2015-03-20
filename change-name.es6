import {Component, Template, Foreach, bootstrap} from 'angular2/angular2';

@Component({
  selector: 'change-name'
})

@Template({
  url: 'change-name.html',
  directives: [Foreach]
})

class ChangeNameComponent {
  name;
  people = ["Tom", "Rick", "Fred"];
  
  constructor() {
    this.title = "Change name";
    this.name = '';
  } 

  changeName(new_name) {
    this.name = new_name;
  }

  addName(new_name) {
    this.people.push(new_name);
    this.result = this.people;
    console.log(this.result);
  }
}

bootstrap(ChangeNameComponent);
