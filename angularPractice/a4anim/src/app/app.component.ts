import { Component } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myAnimation',[
      state('smallState', style({
        transform: 'scale(1)',
      })),
      state('largeState', style({
        transform: 'scale(1.5)',
      })),
      transition('smallState <=> largeState', animate('100ms ease-in'))
    ])
  ]
})
export class AppComponent {
  title = 'app';

  state : string = 'smallState';

  animateMe(){
    this.state = (this.state === 'smallState' ? 'largeState' : 'smallState');
  }

}
