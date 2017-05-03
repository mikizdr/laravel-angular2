import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { QuoteService } from '../quote.service';

import { Quote } from '../quote.interface';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[];

  constructor(private quoteService:QuoteService) 
  {

  }

  ngOnInit() 
  {

  }

  onGetQuotes()
  {
    this.quoteService.getQuotes()
      .subscribe(
        (quotes: Quote[]) => this.quotes = quotes,
        (error: Response) => console.log(error)
      );
  }

}
