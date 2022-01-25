import { Component, OnInit } from '@angular/core';
import { DataService } from '@app/shared/service/data.service';

@Component({
  selector: 'app-links-list',
  templateUrl: './links-list.component.html',
  styleUrls: ['./links-list.component.scss']
})

export class LinksListComponent implements OnInit {

  launchesPast$ = this.dataService.launchesPast$;
  //links$ = this.dataService.links$;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getDataSpaceX();
  }

}
