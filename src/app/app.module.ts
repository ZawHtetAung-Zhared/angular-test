import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MaterialExampleModule } from 'src/material.module';
import { ContactComponent } from './components/contact/contact.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { booksReducer } from './book-state/book.reducers';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    DashboardComponent,
    NavBarComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    FormsModule,
    StoreModule.forRoot({ books: booksReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
