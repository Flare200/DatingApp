import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  learnMore = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  registerToggle() {
    this.registerMode = true;
  }

  learnMoreToggle() {
    this.learnMore = true;
  }

  cancelRegisterMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }

  cancelLearnMore(learnMore: boolean) {
    this.learnMore = learnMore;
  }

}
