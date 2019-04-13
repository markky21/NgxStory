import { ElementRef, Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { interval } from 'rxjs/internal/observable/interval';
import { filter, map, take, takeUntil, tap } from 'rxjs/operators';
import { combineLatest, Observable } from 'rxjs';

export const enum MessageType {
  ConnectionTest = 'ConnectionTest',
  ConnectionEstablished = 'ConnectionEstablished',
  ConfigureSettings = 'ConfigureSettings',
  SetStoryRoute = 'SetStoryRoute'
}

export interface CommunicationBusInterface {
  type: MessageType;
  transfer?: Object | string;
}

@Injectable()
export class AppCommunicationService {
  private iframe: ElementRef;

  private hostSource: Window;
  private hostOrigin: string;

  private connectedWithHost$ = new Subject<boolean>();
  private messageBusIn$ = new Subject<CommunicationBusInterface>();
  private messageBusOut$ = new Subject<CommunicationBusInterface>();

  public constructor() {
    combineLatest(this.messageBusOut$, this.connectedWithHost$)
      .pipe(map(([message]) => message))
      .subscribe((message: CommunicationBusInterface) => {
        this.sendMessageByPostMessage(message);
      });
  }

  /**
   *  Method for retrieving information from connected app
   *  @return Observable<CommunicationBusInterface>
   */
  public getMessageBusObservable(): Observable<CommunicationBusInterface> {
    return this.messageBusIn$.asObservable();
  }

  /**
   *  Method for sending component props settings
   *  @param transfer: Object
   */
  public sendConfigurationSettings(transfer: Object): void {
    this.sendMessage({ type: MessageType.ConfigureSettings, transfer });
  }

  /**
   *  Method for setting route in iframe
   *  @param route: string
   */
  public setStoryRoute(route: string): void {
    this.sendMessage({ type: MessageType.SetStoryRoute, transfer: route });
  }

  /**
   * PRIVATES
   */

  private sendMessage(message: CommunicationBusInterface): void {
    this.messageBusOut$.next(message);
  }

  public initCommunicationWithChild(iframe: ElementRef): void {
    this.iframe = iframe;

    interval(200)
      .pipe(take(20), takeUntil(this.connectedWithHost$))
      .subscribe(() => {
        this.sendMessageToChild({ type: MessageType.ConnectionTest });
      });
  }

  public onMessageReceiveFromHost(event): void {
    if (event.origin !== window.origin || typeof event.data !== 'string') {
      return;
    }

    const data: CommunicationBusInterface = JSON.parse(event.data);

    if (data.type === MessageType.ConnectionTest) {
      this.hostSource = event.source;
      this.hostOrigin = event.origin;
      this.sendMessageToHost({ type: MessageType.ConnectionEstablished });
    } else {
      console.log('onMessageReceiveFromHost: ', data);
      this.messageBusIn$.next(data);
    }
  }

  public onMessageReceiveFromChild(event): void {
    if (event.origin !== window.origin || typeof event.data !== 'string') {
      return;
    }

    const data: CommunicationBusInterface = JSON.parse(event.data);

    if (data.type === MessageType.ConnectionEstablished) {
      this.connectedWithHost$.next(true);
    } else {
      console.log('onMessageReceiveFromChild: ', data);
      this.messageBusIn$.next(data);
    }
  }

  private sendMessageToHost(messageType: CommunicationBusInterface, transfer?: Transferable[]): void {
    this.hostSource.postMessage(JSON.stringify(messageType), this.hostOrigin, transfer);
  }

  private sendMessageToChild(messageType: CommunicationBusInterface, transfer?: Transferable[]): void {
    this.iframe.nativeElement.contentWindow.postMessage(JSON.stringify(messageType), window.origin, transfer);
  }

  private sendMessageByPostMessage(message: CommunicationBusInterface, transfer?: Transferable[]): void {
    this.hostSource ? this.sendMessageToHost(message, transfer) : this.sendMessageToChild(message, transfer);
  }
}
