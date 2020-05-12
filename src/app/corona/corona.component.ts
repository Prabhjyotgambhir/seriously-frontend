import { Component, OnInit, AfterViewInit, NgZone } from '@angular/core';
import { PostService } from '../services/post.service';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';


@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.scss']
})
export class CoronaComponent implements OnInit, AfterViewInit {
  // private chart: am4charts.XYChart;

  constructor(private postService: PostService, private zone: NgZone) {
  }

  ngOnInit() {
    this.postService.getCovidData().subscribe((response) => {
      console.log(response.data.covid19Stats);
    });
  }

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      const map = am4core.create("chartdiv", am4maps.MapChart);
      map.geodata = am4geodata_worldLow;
        });
  }

}
