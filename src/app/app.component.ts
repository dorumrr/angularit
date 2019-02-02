import PouchDB from 'pouchdb';
import PouchFind from 'pouchdb-find';
PouchDB.plugin(PouchFind);

import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { environment } from '../environments/environment';
import { ApisService } from './services/apis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit, OnDestroy {

  env = environment;
  navbarCollapsed = true;

  // window: any = window;
  db = new PouchDB('db');

  posts;

  constructor(
    private apis: ApisService
  ) { }


  ngOnInit() {
    // console.log(environment);
    // console.log(this.db, PouchFind);

    this.apis.getTypicodePosts('/posts', {}).subscribe(res => {
      console.log(res);
      this.posts = res;
    });

  }

  ngOnDestroy() { }


}


