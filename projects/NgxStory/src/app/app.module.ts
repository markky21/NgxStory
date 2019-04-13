import { BrowserModule } from '@angular/platform-browser';
import {
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatTreeModule,
  MatTabsModule,
  MatSelectModule,
  MatInputModule,
  MatCheckboxModule
} from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentComponent } from './components/content/content.component';
import { IframeComponent } from './components/iframe/iframe.component';
import { IframeService } from './components/iframe/iframe.service';
import { LayoutModule } from '@angular/cdk/layout';
import { NavComponent } from './components/nav/nav.component';
import { NavTreeComponent } from './components/nav-tree/nav-tree.component';
import { NgxStoryRouting } from './playground.routing';
import { TabComponent } from './components/tab/tab.component';

// Additional Imports
import { ReactiveFormsModule } from '@angular/forms';
import { StoriesWrapperComponent } from './components/stories-wrapper/stories-wrapper.component';
import { AppCommunicationService } from './shared/services/app-communication.service';
import { RoutingService } from './shared/services/routing.service';
import { ViewportCustomizerComponent } from './components/viewport-customizer/viewport-customizer.component';
import { StoryWrapperModule } from './components/story-wrapper/story-wrapper.module';

const additionalModules = [];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NavTreeComponent,
    IframeComponent,
    ContentComponent,
    TabComponent,
    StoriesWrapperComponent,
    ViewportCustomizerComponent
  ],
  providers: [IframeService, AppCommunicationService, RoutingService],
  imports: [
    ...additionalModules,
    BrowserAnimationsModule,
    BrowserModule,
    LayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    MatTreeModule,
    NgxStoryRouting,
    ReactiveFormsModule,
    StoryWrapperModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
