import { Component, OnInit } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
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

  currentTopic: { topicId: number, title: string } = { topicId: 0, title: "" };

  constructor(private rest: ApiRestService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.readTopics('');
  }

  readTopics(url: string) {
    this.rest.getTopics(url).subscribe(
      response => {
        this.topics = response.data;
        let pages = response.links;
        pages[0]['label'] = '>'
        console.log(pages)
        pages.pop()
        pages.shift()
        this.pages = pages
      }
    )
  }

  addTopic() {
    this.rest.postTopic(this.newTopic.title).subscribe(
      _ => {
        this.toastr.error("Se ha agregado")
        this.readTopics('');
      }, error => {
        this.toastr.error("Algó mal ocurrió", error.message)
      }
    );
  }

  updateTopics() {
    this.rest.putTopic(this.currentTopic).subscribe(
      response => {
        this.toastr.success("Se actualizó"); 
        this.readTopics(''); 
      }, error => {
        this.toastr.error("Ocurrió un error"); 
      }
    )
  }

  deleteTopic(){
    console.log("delete")
    this.rest.deleteTopic(this.currentTopic).subscribe(
      response => {
        this.readTopics(''); 
        this.toastr.success("Se eliminó"); 
      }, error => {
        this.toastr.error("Ocurrió un error", error.message); 
      }
    )
  }


  selectTmpTopic(topic: any) {
    this.currentTopic = {topicId: topic.id, title: topic.title}
  }

}
