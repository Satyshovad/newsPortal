import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NewsComponent} from './news/news.component';
import {StoryComponent} from './story.component';

const routes: Routes = [
  {path: 'news', component: NewsComponent },
  {path: '', component: StoryComponent}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoryRoutingModule { }
