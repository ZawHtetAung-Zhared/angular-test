import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectBooks } from 'src/app/book-state/book.selector';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  books$ = this.store.select(selectBooks);

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  public dummytext: string = 'Lorem ipsum, dolor sit amet.';
  public message: any = '';
  public sentClicked: boolean = false;
  submit(e: any) {
    e.preventDefault();
    this.dummytext = 'Message is successfully sent!';
    this.sentClicked = true;
  }

}
