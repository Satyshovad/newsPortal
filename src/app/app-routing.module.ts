import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {StoryComponent} from './story/story.component';
import {InterviewsComponent} from './interviews/interviews.component';
import {CovidComponent} from './covid/covid.component';
import {ErrorComponent} from './error/error.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'story', component: StoryComponent},
  {path: 'interviews', component: InterviewsComponent},
  {path: 'covid', component: CovidComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
