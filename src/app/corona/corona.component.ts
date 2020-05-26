import { Component, OnInit, AfterViewInit, NgZone } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.scss']
})
export class CoronaComponent implements OnInit, AfterViewInit {

  constructor(private postService: PostService, private zone: NgZone) {
  }

  ngOnInit() {
    this.postService.getCovidData().subscribe((response) => {
      console.log(response.data.covid19Stats);
    });
  }

  ngAfterViewInit() {
  }

}
