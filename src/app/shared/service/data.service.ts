import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';
import { take, tap } from 'rxjs/operators';
import { DataResponse, Site, Link, LaunchesPast } from '../interface/data.interface';

const qs = gql`
{
  launchesPast(limit: 24) {
    mission_name
    launch_date_local
    launch_site {
      site_name_long
      site_name
      site_id
    }
    links {
      article_link
      video_link
      mission_patch
    }
    id
  }
}
`;

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //private launchesPastSubject = new BehaviorSubject<any[]>(null);
  private launchesPastSubject = new BehaviorSubject<LaunchesPast>(null);
  launchesPast$ = this.launchesPastSubject.asObservable();

  private linksSubject = new BehaviorSubject<LaunchesPast[]>(null);
  links$ = this.linksSubject.asObservable();

  constructor(private apollo: Apollo) {
    //this.getDataSpaceX();
  }

  getDataSpaceX(): void {
    //this.apollo.watchQuery<any>({
    this.apollo.watchQuery<DataResponse>({
      query: qs
    }).valueChanges.pipe(
      take(1),
      /*
      tap(res => {
        console.log(res)
      })
      */
      //destructure data
      tap(({ data }) => {
        const { launchesPast } = data;

        //any
        //const { launchesPast } = data;
        //this.launchesPastSubject.next(launchesPast);
        //want links from first
        //this.linksSubject.next(launchesPast[1]["links"]);


        this.launchesPastSubject.next(launchesPast);
        this.linksSubject.next(launchesPast[1].links.article_link);
      })
    ).subscribe(
      data => console.log('success', data),
      error => console.log('wrong', error)
    );
  }


}
