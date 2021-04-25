import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StoryComponent} from './story/story.component';
import {InterviewsComponent} from './interviews/interviews.component';
import {CovidComponent} from './covid/covid.component';
import {ErrorComponent} from './error/error.component';
import {ContactsComponent} from './contacts/contacts.component';
import {InfoComponent} from './info/info.component';
import {ContactsCanDeactivateGuardService} from './services/contacts-can-deactivate-guard.service';
import {AdminComponent} from './admin/admin.component';
import {CanActivateGuard} from './services/can-activate-guard.service';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'story', component: StoryComponent},
  {path: 'interviews', component: InterviewsComponent},
  {path: 'covid', component: CovidComponent},
  {path: 'contacts', component: ContactsComponent, canDeactivate: [ContactsCanDeactivateGuardService]},
  {path: 'info', component: InfoComponent},
  {path: 'admin', component: AdminComponent, canActivate: [CanActivateGuard]},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
