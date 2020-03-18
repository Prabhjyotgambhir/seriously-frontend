import { Component, OnInit } from '@angular/core';
import { Post } from '../data-models/Post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  postList: any = [{},{},{},{},{},{}];

  constructor() { }

  ngOnInit() {
  }

}
