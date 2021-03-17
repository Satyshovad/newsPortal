import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CovidNavbarComponent } from './covid-navbar/covid-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import {FormsModule} from '@angular/forms';
import { LatestnewsComponent } from './latestnews/latestnews.component';
import { StoryComponent } from './story/story.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { CovidComponent } from './covid/covid.component';
import { ErrorComponent } from './error/error.component';
import { ContactsComponent } from './contacts/contacts.component';
import { InfoComponent } from './info/info.component';
import {UserPipe} from './user.pipe';
import {FilterPipe} from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CovidNavbarComponent,
    FooterComponent,
    HomeComponent,
    LatestnewsComponent,
    StoryComponent,
    InterviewsComponent,
    CovidComponent,
    ErrorComponent,
    ContactsComponent,
    InfoComponent,
    UserPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
