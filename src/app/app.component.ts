import { Component } from '@angular/core';

import { WikipediaSearchService } from "./wikipedia-search.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items:Array<string>;
  links:Array<string>;

  constructor(private service:WikipediaSearchService){}

  search(term: string){
    this.service.search(term).subscribe(results => [
      this.items= results[1],
      this.links= results[3]
    ])
  }
}
