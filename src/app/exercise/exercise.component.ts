import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css'],
})
export class ExerciseComponent implements OnInit {
  displayDetails = false;
  clicks = [];

  constructor() {}

  ngOnInit(): void {}

  toggleDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    this.clicks.push(new Date());
  }

  getColor(target) {
    console.log(target);
    return 'blue';
    // return this.clicks.indexOf();
  }
}
