import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../api-rest.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  user = { id: 0, username: '',  role: ''};

  username: String = ""; 

  constructor(private rest: ApiRestService) { }

  ngOnInit(): void {
  }

}
