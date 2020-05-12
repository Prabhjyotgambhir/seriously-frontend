import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mid-section',
  templateUrl: './mid-section.component.html',
  styleUrls: ['./mid-section.component.scss']
})
export class MidSectionComponent implements OnInit {
  public images = [{
    // tslint:disable-next-line: max-line-length
    src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpaperaccess.com%2Fcoffee-laptop&psig=AOvVaw2vIrwJ_3ZQf4RHFlxkPt-7&ust=1584976591804000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLirt4ewrugCFQAAAAAdAAAAABAD',
    label: 'About Me'
  }, {
    // tslint:disable-next-line: max-line-length
    src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpaperaccess.com%2Fcoffee-laptop&psig=AOvVaw2vIrwJ_3ZQf4RHFlxkPt-7&ust=1584976591804000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLirt4ewrugCFQAAAAAdAAAAABAD',
    label: 'Contact'
  }, {
    // tslint:disable-next-line: max-line-length
    src: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpaperaccess.com%2Fcoffee-laptop&psig=AOvVaw2vIrwJ_3ZQf4RHFlxkPt-7&ust=1584976591804000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLirt4ewrugCFQAAAAAdAAAAABAD',
    label: 'Whats New'
  }
  ]
  constructor() {
  }

  ngOnInit() {
  }

}
