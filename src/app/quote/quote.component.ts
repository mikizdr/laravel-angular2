import { Component, OnInit, Input } from '@angular/core';

import { Quote } from '../quote.interface';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() quote: Quote;
  editing = false;
  editValue = '';

  constructor(private quoteService: QuoteService) { }

  ngOnInit()
  {

  }

  onEdit()
  {
    this.editing = true;
    this.editValue = this.quote.content;
  }

  onUpdate()
  {
    this.quoteService.updateQuote(this.quote.id, this.editValue)
      .subscribe(
        // too bad I`m just accessing "quote". Should be "quote.quote"
        (quote: Quote) => this.quote = quote
      );
    this.editValue = '';
    this.editing = false;
  }

}
