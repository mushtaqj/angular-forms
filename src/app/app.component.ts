import { Component, OnInit, VERSION } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  readonly loginFormControl = new FormControl();

  ngOnInit(): void {
    this.loginFormControl.valueChanges.subscribe(val => {
      console.log(val);
    });
  }
}
