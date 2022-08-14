import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  animations: [
    trigger('slide_in_out', [
      state('slide_in', style({
        marginTop: '-240px',
        visibility: 'auto'
      })),
      state('slide_out', style({
        marginTop: '-200px',
        visibility: 'hidden'
      })),
      transition('slide_in <=> slide_out', animate(300))
    ]),
  ]
})
export class LandingPageComponent implements OnInit {
  public slider_state = 'slide_out';
  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.slider_state = 'slide_in';
    }, 500);
  }

  gotoDashboard() {
    this.slider_state = 'slide_out'
    setTimeout(() => {
      this.router.navigate(['/dashboard'])
    }, 300);
  }

}
