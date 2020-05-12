import { Component, OnInit } from '@angular/core';
import { Post } from '../data-models/Post';

@Component({
  selector: 'app-must-read',
  templateUrl: './must-read.component.html',
  styleUrls: ['./must-read.component.scss']
})
export class MustReadComponent implements OnInit {
  mustRead = [];
  constructor() { }

  ngOnInit() {
    this.mustRead = [{
      imagePath: 'https://solopine.com/rosemary/wp-content/uploads/2018/11/',
      image: 'p1-520x400.jpg',
      title: 'Exploring the Combodia',
      createdAt: 'Novermber 20, 2000',
      category: {
        name: 'Lifestyle'
      }
    }, {
      imagePath: 'https://solopine.com/rosemary/wp-content/uploads/2018/11/',
      image: 'p1-520x400.jpg',
      title: 'Exploring the Combodia',
      createdAt: 'Novermber 20, 2000',
      category: {
        name: 'Lifestyle'
      }
    }, {
      imagePath: 'https://solopine.com/rosemary/wp-content/uploads/2018/11/',
      image: 'p1-520x400.jpg',
      title: 'Exploring the Combodia',
      createdAt: 'Novermber 20, 2000',
      category: {
        name: 'Lifestyle'
      }
    }];
  }

}
