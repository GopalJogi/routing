import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  template: `
    <h2>course details </h2>
    <ul>
      <li (click)="onSelect(x)" *ngFor="let x of course1">
         <span class="badge">{{x.id}}</span> {{x.name}}

      </li>
    </ul>
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
export class CourseComponent {
  constructor(private _router : Router){

  }

  public course1=[
    {"id":1,"name":"angular"},
    {"id":2,"name":"react js"},
    {"id":3,"name":"vue js"},
    {"id":4,"name":"mongo db"},
  ]
  onSelect(x :any) {
         this._router.navigate(['/course1',x.id])
  }
  
}
