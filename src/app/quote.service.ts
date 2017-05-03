import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx'; // to unlock map operator

// add Injectable decorator
@Injectable()
export class QuoteService {

  constructor(private http: Http)
  {

  }

  getQuotes()
  {
    return this.http.get('http://localhost:8000/api/quotes')
      .map(
        (response: Response) => {
          return response.json().quotes;
        }
      );
  }

}
