import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {NewsComponent} from './news/news.component';
import {StoryComponent} from './story.component';
import {StoryRoutingModule} from './story-routing.module';

@NgModule({
  declarations: [StoryComponent, NewsComponent],
  imports: [
    CommonModule,
    RouterModule,
    StoryRoutingModule,
  ]
})
export class StoryModule { }
