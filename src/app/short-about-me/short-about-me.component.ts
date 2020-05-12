import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-short-about-me',
  templateUrl: './short-about-me.component.html',
  styleUrls: ['./short-about-me.component.scss']
})
export class ShortAboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  facebookPage() {
    window.open('https://www.facebook.com/prabhjotgambhir/');
  }

  instagramPage() {
    window.open('https://www.instagram.com/prabhjyot_gambhir/');
  }

  linkedinPage() {
    window.open('https://www.linkedin.com/in/prabhjyot-gambhir-3832b5116/');
  }

  githubPage() {
    window.open('https://github.com/Prabhjyotgambhir');
  }

  emailPage() {
    window.location.href = 'mailto:knowprabhjyot@gmail.com?subject=Subject&body=message%20goes%20here';
  }

}
