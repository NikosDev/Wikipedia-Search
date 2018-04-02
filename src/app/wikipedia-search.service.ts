import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WikipediaSearchService {

  constructor(private http: HttpClient) { }

  search(term: string){
    let search = new HttpParams();
    search = search.append('action', 'opensearch');
    search = search.append('search', term);
    search = search.append('format', 'json');
    search = search.append('origin', '*');

    return this.http.get('https://en.wikipedia.org/w/api.php?', {params:search})
                    .map(response => response);
  }

}
