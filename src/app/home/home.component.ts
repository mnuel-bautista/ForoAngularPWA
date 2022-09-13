import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  topics = [{ id: 0, title: '', userId: 0 }, { id: 1, title: 'redes', userId: 2 }];

  constructor() { }

  ngOnInit(): void {
  }

}
