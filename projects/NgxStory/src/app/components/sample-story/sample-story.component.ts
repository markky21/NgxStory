import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'storyapp-sample-story',
  templateUrl: './sample-story.component.html',
  styleUrls: ['./sample-story.component.scss']
})
export class SampleStoryComponent implements OnInit {
  @HostListener('window:message', ['$event'])
  onMessage(event) {
    typeof event.data === 'string' && this.messages.unshift(event.data);
  }

  messages: string[] = [];

  constructor() {}

  ngOnInit() {}
}
