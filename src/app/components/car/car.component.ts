import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
 name:any;
  speed:any;
 model: string = 'RS8';
 colors:any;
//options:string[];

  constructor() { }

  ngOnInit() {
     this.name = "Audi";
     this.speed = 110;
    // this.model = 'RS8';
    this.colors {
      car: 'White',
      salon: 'Black',
      wheels: 'Silver';
    };
//this.options = ["gas", "drive", "parking"]
  }
}
// interface Colors {
//   var car: string,
//   var salon: string,
//   var wheels: string
// }
