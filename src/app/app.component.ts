import { Component,  OnInit } from '@angular/core';
import { WikipediaSearchService } from "./wikipedia-search.service";
import { Subject } from "rxjs/Subject";
import { NgProgress } from '@ngx-progressbar/core';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  items:Array<string>;
  links:Array<string>;
  term$ = new Subject<string>();

  constructor(private service:WikipediaSearchService, public progress: NgProgress){
    this.term$
        .debounceTime(400)
        .distinctUntilChanged()
        .switchMap(term => this.service.search(term))
        .subscribe(results => [
          this.items= results[1],
          this.links= results[3]
        ]);
  }

  ngOnInit(){
    this.progress.start();
  }

  ksekina(){
    this.progress.start();
  }
}

