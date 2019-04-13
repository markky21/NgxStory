import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoryWrapperComponent } from './story-wrapper.component';

@NgModule({
  declarations: [StoryWrapperComponent],
  imports: [CommonModule],
  exports: [StoryWrapperComponent]
})
export class StoryWrapperModule {}
