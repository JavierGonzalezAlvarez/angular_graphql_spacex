import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '@app/shared/service/data.service';

@Component({
  selector: 'app-launches-past',
  templateUrl: './launches-past.component.html',
  styleUrls: ['./launches-past.component.scss']
})
export class LaunchesPastComponent implements OnInit {

  //send data from father to child
  @Input()
  launches;

  launchesPast$ = this.dataService.launchesPast$;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getDataSpaceX();
  }

}
