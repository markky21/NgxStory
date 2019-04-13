import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavComponent } from './components/nav/nav.component';
import { storiesComponents, storiesModules, storiesRoutes, storiesServices } from '../stories.config';
import { StoriesWrapperComponent } from './components/stories-wrapper/stories-wrapper.component';
import { StoryWrapperModule } from './components/story-wrapper/story-wrapper.module';

const routes: Routes = [
  { path: '', component: NavComponent },
  {
    path: 'story',
    component: StoriesWrapperComponent,
    children: [{ path: '', redirectTo: '', pathMatch: 'full' }, ...storiesRoutes]
  },
  { path: '**', component: NavComponent }
];

@NgModule({
  declarations: [...storiesComponents],
  exports: [RouterModule, ...storiesComponents],
  imports: [RouterModule.forRoot(routes), storiesModules, FormsModule, CommonModule, StoryWrapperModule],
  providers: [...storiesServices]
})
export class NgxStoryRouting {}
