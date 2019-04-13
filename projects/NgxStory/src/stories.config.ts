import { Routes } from '@angular/router';

import { TypographyStoryComponent } from './stories/typography-story.component';
import { StoriesSideNavInterface } from './app/shared/playground.model';
import { SampleStoryComponent } from './app/components/sample-story/sample-story.component';

// Modules to be imported
export const storiesModules = [];
// Components to be imported
export const storiesComponents = [TypographyStoryComponent, SampleStoryComponent];
// Services to be imported
export const storiesServices = [];

export const storiesRoutes: Routes = [
  { path: '', redirectTo: 'story/sample-story', pathMatch: 'full' },
  { path: 'sample-story', component: SampleStoryComponent },
  { path: 'typography', component: TypographyStoryComponent }
];

export const storiesSideNav: StoriesSideNavInterface[] = [
  {
    name: 'Principies',
    type: 'folder',
    children: [{ name: 'SampleStory', type: 'file', route: 'sample-story' }, { name: 'Typography', type: 'file', route: 'typography' }]
  }
];
