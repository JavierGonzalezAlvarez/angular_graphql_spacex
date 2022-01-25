import { Component, Input, OnInit } from '@angular/core';
//import { DataService } from '@app/shared/service/data.service';

@Component({
  selector: 'app-launches-past-details',
  templateUrl: './launches-past-details.component.html',
  styleUrls: ['./launches-past-details.component.scss']
})
export class LaunchesPastDetailsComponent implements OnInit {

  //child
  @Input()
  launchesDetails;

  //no need for observable, we get data from "father" coomponent
  //launchesPast$ = this.dataService.launchesPast$;

  //constructor(private dataService: DataService) { }
  constructor() { }

  ngOnInit(): void {
    console.log(this.launchesDetails)
    //this.dataService.getDataSpaceX();
  }

}
