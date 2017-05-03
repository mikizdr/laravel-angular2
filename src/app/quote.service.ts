import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx'; // to unlock map operator
import { Observable } from 'rxjs';

// add Injectable decorator
@Injectable()
export class QuoteService {

  constructor(private http: Http)
  {

  }

  addQuote(content: string) {
    const body = JSON.stringify({content: content});
    const headers = new Headers({'Content-Type': 'application/json'});
    return this.http.post('http://localhost:8000/api/quote', body, {headers:headers});
  }

  getQuotes(): Observable<any>
  {
    return this.http.get('http://localhost:8000/api/quotes')
      .map(
        (response: Response) => {
          return response.json().quotes;
        }
      );
  }

  updateQuote(id: number, newContent: string)
  {
    //Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
    const body = JSON.stringify({content: newContent});
    // define the content type of header
    const headers = new Headers({'Content-Type':'application/json'});
    return this.http.put('http://localhost:8000/api/quote/' + id, body, {headers: headers})
      .map(
        (response: Response) => response.json()
      );
  }

  deleteQuote(id: number)
  {
    return this.http.delete('http://localhost:8000/api/quote/' + id);
  }

}
