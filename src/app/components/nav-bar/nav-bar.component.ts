import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  animations: [
    trigger('slide_in_out', [
      state('slide_in', style({
        width: '60px',
      })),
      state('slide_out', style({
        width: '0px'
      })),
      transition('slide_in <=> slide_out', animate(300))
    ]),
  ]
})
export class NavBarComponent implements OnInit {
  public slider_state = 'slide_out';
  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.slider_state = 'slide_in';
    }, 300);
  }
  goto(data: string) {
    this.slider_state = 'slide_out';
    setTimeout(() => {
      this.slider_state = 'slide_in';
    }, 300);
    setTimeout(() => {
      this.router.navigate([`/${data}`])
    }, 300);
  }

}
