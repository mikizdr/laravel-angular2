import { Component, OnInit } from '@angular/core';

import { Quote } from '../quote.interface';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quote: Quote;

  constructor() { }

  ngOnInit() {
  }

}
