import { filter } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AppCommunicationService, CommunicationBusInterface, MessageType } from './app-communication.service';

@Injectable()
export class RoutingService {
  public constructor(private appCommunicationService: AppCommunicationService, private router: Router) {
    this.handleChangeRouteRequest();
  }

  private handleChangeRouteRequest(): void {
    this.appCommunicationService
      .getMessageBusObservable()
      .pipe(filter((message: CommunicationBusInterface) => message.type === MessageType.SetStoryRoute))
      .subscribe((message: CommunicationBusInterface) => {
        this.router.navigate([`/story/${message.transfer}`]);
      });
  }
}
