import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { IframeService } from './iframe.service';
import { AppCommunicationService } from '../../shared/services/app-communication.service';
import { DeviceViewportInterface, IframeViewportInterface } from '../../shared/playground.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-story-iframe',
  templateUrl: './iframe.component.html',
  styleUrls: ['./iframe.component.scss']
})
export class IframeComponent implements OnInit, OnDestroy {
  @ViewChild('iframe')
  public set iframeSetter(iframe: ElementRef) {
    this.iframe = iframe;
    this.iframeService.initIframe(iframe);
  }

  public currentRoute$: Observable<string>;
  public deviceViewPort: DeviceViewportInterface;

  public iframe: ElementRef;
  public readonly storyRoute: SafeResourceUrl;
  public readonly subscriptions = new Subscription();

  public constructor(private iframeService: IframeService, private sanitizer: DomSanitizer) {
    this.storyRoute = sanitizer.bypassSecurityTrustResourceUrl(window.origin + '/story/sample-story'); // TODO move to global settings

    this.currentRoute$ = this.iframeService.getCurrentRoute();

    this.subscriptions.add(
      this.iframeService.getDeviceVewPort().subscribe((device: DeviceViewportInterface) => {
        this.deviceViewPort = device;
      })
    );
  }

  ngOnInit() {
    console.log(this.iframe);
  }

  ngOnDestroy(): void {
    this.iframeService.unmountIframe();
  }
}
