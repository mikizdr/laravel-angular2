import { Component, OnInit } from '@angular/core';

import { Quote } from '../quote.interface';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes: Quote[];

  constructor() { }

  ngOnInit() {
  }

}
