import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CovidNavbarComponent } from './covid-navbar/covid-navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { LatestnewsComponent } from './latestnews/latestnews.component';
/*import { StoryComponent } from './story/story.component';*/
import { InterviewsComponent } from './interviews/interviews.component';
import { CovidComponent } from './covid/covid.component';
import { ErrorComponent } from './error/error.component';
import { ContactsComponent } from './contacts/contacts.component';
import { InfoComponent } from './info/info.component';
import { UserPipe } from './user.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ContactsCanDeactivateGuardService } from './services/contacts-can-deactivate-guard.service';
import { ReactiveFormsModule } from '@angular/forms';
import {UserService} from './services/user.service';
import {AdminComponent } from './admin/admin.component';
import {CanActivateGuard} from './services/can-activate-guard.service';
import {PostService} from './services/post.service';
import {Post1Service} from './services/post1.service';
import {NewsService} from './services/news.service';
import {StoryModule} from './story/story.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CovidNavbarComponent,
    FooterComponent,
    HomeComponent,
    LatestnewsComponent,
    /*StoryComponent,*/
    InterviewsComponent,
    CovidComponent,
    ErrorComponent,
    ContactsComponent,
    InfoComponent,
    UserPipe,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoryModule
  ],
  // tslint:disable-next-line:max-line-length
  providers: [ContactsCanDeactivateGuardService, UserService, CanActivateGuard, PostService, Post1Service, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
