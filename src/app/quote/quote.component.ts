import { Component, OnInit, Input } from '@angular/core';

import { Quote } from '../quote.interface';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  @Input() quote: Quote;
  editing: false;
  editValue = '';

  constructor() { }

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
    this.editValue = '';
    this.editing = false;
  }

}
