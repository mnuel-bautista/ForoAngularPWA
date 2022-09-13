import { Component, OnInit } from '@angular/core';
import { ApiRestService } from '../api-rest.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  topics = [{ id: 0, title: '', userId: 0 }, { id: 1, title: 'redes', userId: 2 }];

  newTopic = { title: "" };

  pages = [{ url: '', label: '', active: false }];

  constructor(private rest: ApiRestService) { }

  ngOnInit(): void {
    this.readTopics('');
  }

  readTopics(url: string) {
    this.rest.getTopics(url).subscribe(
      response => {
        this.topics = response.data;
        this.pages = response.links; 
      }
    )
  }

  addTopic() {
    this.rest.postTopic(this.newTopic.title).subscribe(
      _ => {
        this.readTopics('');
      }
    );
  }

}
