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
import { StoryComponent } from './story/story.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { CovidComponent } from './covid/covid.component';
import { ErrorComponent } from './error/error.component';
import { ContactsComponent } from './contacts/contacts.component';
import { InfoComponent } from './info/info.component';
import { UserPipe } from './user.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ContactsCanDeactivateGuardService } from './services/contacts-can-deactivate-guard.service';
import { CanLoadGuardService } from './services/can-load-guard.service';
import { ReactiveFormsModule } from '@angular/forms';
import {UserService} from './services/user.service';
import {AdminComponent } from './admin/admin.component';
import {CanActivateGuard} from './services/can-activate-guard.service';

/*const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'story', component: StoryComponent},
  { path: 'interviews', component: InterviewsComponent},
  { path: 'covid', component: CovidComponent, canLoad:[CanLoadGuardService]},
  { path: 'contacts', component: ContactsComponent, canDeactivate: [ContactsCanDeactivateGuardService]},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
];*/


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
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ContactsCanDeactivateGuardService, CanLoadGuardService, UserService, CanActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
