# Angular & grapghql - SpaceX
api: https://api.spacex.land/graphql/
-ubuntu 20.04

## create new project
$ ng new angulargraphql

## install apollo-angular
$ ng add apollo-angular

## run app
$ ng serve

## create modules, components, routes
$ ng g m components/pages/home/home -m=app --route home --flat

$ ng g m shared/components/header
$ ng g c shared/components/header

$ ng g m components/pages/launchesPast/launchesPast -m=app --route launchesPast --flat
$ ng g m components/pages/launchesPast/launchesPast-details -m=app --route launchesPast-details --flat
$ ng g m components/pages/notFound -m=app --route notFound

# links
$ ng g m components/pages/links/links-list -m=app --route links-list


## create relative routes
tsconfig.ts

## create service
$ ng g s shared/service/data

## Change <any> for interfaces
create interface folder inside shared
