import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, HostListener } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { AppCommunicationService } from '../../shared/services/app-communication.service';

@Component({
  selector: 'ngx-story-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  @HostListener('window:message', ['$event'])
  onMessage(event) {
    this.appCommunicationService.onMessageReceiveFromChild(event);
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset).pipe(map(result => result.matches));

  constructor(private breakpointObserver: BreakpointObserver, private appCommunicationService: AppCommunicationService) {}
}
