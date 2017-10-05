import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('myAnimation', [
      state('smallState',style({
        transform: 'scale(1)'
      })),
      state('largeState',style({
        transform: 'scale(1.5)'
      })),

      transition('smallState <=> largeState', animate('100ms ease-in')),
    ]),
  ]
})
export class AppComponent {
  //service added
  constructor(private data: DataService) {
  }
  exProp: string = " ";
  ngOnInit() {
    console.log(this.data.hobbies);
    this.exProp = this.data.myFunc();
  }
  // rest of the code
  title = 'Angular App';
  titleClass = 'red-style';
  bluey = 'blue';
  styleTitle = true;
  idTitle = 'underlineMe';
  // animated paragraph tag below
  obj = {
    name: 'adit'
  }

  classesTitle = {
    'red-style': true,
    'font-thru': true
  }

  stylesTitle = {
    'color': 'green',
    'font-size': '40px'
  }

  myArr = [''];
  myArr1 = ['hello', 'hey', 'what up'];
  myArr2 = ['buttons', 'clicks', 'directives'];

  // property binding
  angularlogo = 'https://angular.io/assets/images/logos/angular/angular.png';
  btnStatus = true;

  //events
  myEvent(e) {
    console.log("clicked");
}

// adding animation to paragraph tag
  state: string = 'smallState';
  animateMe(){
    this.state = (this.state === 'smallState' ? 'largeState' : 'smallState');
  }
}
