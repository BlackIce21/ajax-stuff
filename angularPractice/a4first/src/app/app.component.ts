import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular App';
  titleClass = 'red-style';
  bluey = 'blue';
  styleTitle = true;
  idTitle = 'underlineMe'

  obj = {
    name : 'adit'
  }

  classesTitle = {
    'red-style' : true,
    'font-thru' : true
  }

  stylesTitle = {
    'color' : 'green',
    'font-size' : '40px'
  }

  myArr1 = ['hello', 'hey','what up'];
  myArr2 = ['buttons','clicks','directives'];

  // property binding
  angularlogo = 'https://angular.io/assets/images/logos/angular/angular.png';
  btnStatus = true;

  //events
  myEvent(e){
    console.log("clicked");
  }
}
