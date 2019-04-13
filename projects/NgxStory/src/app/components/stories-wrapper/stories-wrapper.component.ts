import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { AppCommunicationService } from '../../shared/services/app-communication.service';

@Component({
  selector: 'storyapp-stories-wrapper',
  templateUrl: './stories-wrapper.component.html',
  styleUrls: ['./stories-wrapper.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StoriesWrapperComponent implements OnInit {
  @HostListener('window:message', ['$event'])
  onMessage(event) {
    this.appCommunicationService.onMessageReceiveFromHost(event);
  }

  constructor(private appCommunicationService: AppCommunicationService) {}

  ngOnInit() {}
}
