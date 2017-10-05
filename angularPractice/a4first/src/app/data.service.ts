import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  hobbies = ['playing', 'running', 'jumping'];

  myFunc(){
    return 'The function returned.';
  }

}
