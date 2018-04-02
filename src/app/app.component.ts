import { Component } from '@angular/core';
import { WikipediaSearchService } from "./wikipedia-search.service";
import { Subject } from "rxjs/Subject";

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items:Array<string>;
  links:Array<string>;
  term$ = new Subject<string>();

  constructor(private service:WikipediaSearchService){
    this.term$
        .debounceTime(400)
        .distinctUntilChanged()
        .switchMap(term => this.service.search(term))
        .subscribe(results => [
          this.items= results[1],
          this.links= results[3]
        ]);
  }

  search(term: string){
    this.service.search(term).subscribe(results => [
      this.items= results[1],
      this.links= results[3]
    ])
  }
}
