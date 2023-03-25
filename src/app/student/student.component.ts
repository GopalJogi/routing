import { Component } from '@angular/core';

@Component({
  selector: 'app-student',
  template: `
    <h2>
      student works!
</h2>
  `,
  styles: [
    `
    h2{
      color:red;
      text-align:center;
      font-family:play;
      font-weight:bold;
      font-size:30;
    }
    `
  ]
})
export class StudentComponent {


  constructor(){}
  ngOninit():void{

  }
}
