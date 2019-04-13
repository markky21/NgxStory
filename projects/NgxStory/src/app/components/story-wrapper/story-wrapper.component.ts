import {Component, Input} from '@angular/core';

@Component({
  selector: 'ngx-story-wrapper',
  templateUrl: './story-wrapper.component.html',
  styleUrls: ['./story-wrapper.component.scss']
})
export class StoryWrapperComponent {
  @Input() title: string;
  @Input() subtitle: string;
  @Input() teaser: string;
}
