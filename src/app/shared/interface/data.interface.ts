/*
{
  launchesPast(limit: 10) {
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
*/

export interface DataResponse {
    launchesPast: LaunchesPast;
}

export interface LaunchesPast {
    id: number;
    mission_name: string;
    launch_date_local: Date;
    launch_site: Site;
    links: Link;
}

export interface Site {
    site_name_long: string;
    site_name: string;
    site_id: string;
}

export interface Link {
    article_link: string;
    video_link: string;
    mission_patch: string;
}

