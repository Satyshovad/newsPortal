import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {NewsComponent} from './news/news.component';
import {StoryComponent} from './story.component';

@NgModule({
  declarations: [StoryComponent, NewsComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class StoryModule { }
