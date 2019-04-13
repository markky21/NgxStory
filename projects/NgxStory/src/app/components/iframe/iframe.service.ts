import { ElementRef, Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { AppCommunicationService } from '../../shared/services/app-communication.service';
import { DeviceViewportInterface, SelectOptionValuesInterface } from '../../shared/playground.model';

export const Devices: DeviceViewportInterface[] = [
  {
    name: 'Desktop responsive',
    width: '100%',
    height: '100%',
    orientationHorizontal: true
  },
  {
    name: 'Desktop HD',
    width: '1200px',
    height: '100%',
    orientationHorizontal: true
  },
  {
    name: 'iPhoneX',
    width: '812px',
    height: '375px',
    orientationHorizontal: false
  },
  {
    name: 'iPhone 6/7/8 Plus',
    width: '736px',
    height: '414px',
    orientationHorizontal: false
  }
];

@Injectable()
export class IframeService {
  public deviceViewPort$ = new BehaviorSubject<DeviceViewportInterface>(Devices[0]);

  private currentRoute$ = new BehaviorSubject<string>('');
  private currentDevice$ = new Subject<DeviceViewportInterface>();
  private currentDevice: DeviceViewportInterface;
  private iframe: ElementRef;

  public constructor(private appCommunicationService: AppCommunicationService) {
    this.currentDevice$.subscribe(value => {
      this.currentDevice = value;
    });
  }

  public initIframe(iframe: ElementRef): void {
    this.iframe = iframe;
    this.setDevice(Devices[0]);

    this.appCommunicationService.initCommunicationWithChild(iframe);
  }

  public setDevice(device: DeviceViewportInterface): void {
    this.currentDevice$.next(device);

    this.setDeviceVewPort(device);
  }

  public getCurrentRoute(): Observable<string> {
    return this.currentRoute$.asObservable();
  }
  public getDeviceVewPort(): Observable<DeviceViewportInterface> {
    return this.deviceViewPort$.asObservable();
  }
  public getCurrentViewPort(): DeviceViewportInterface {
    return this.deviceViewPort$.value;
  }

  public getDevicesSelectOption(): SelectOptionValuesInterface[] {
    const options: SelectOptionValuesInterface[] = [];

    Devices.forEach(device => {
      options.push({ viewValue: device.name, value: device });
    });

    return options;
  }

  private setDeviceVewPort(device: DeviceViewportInterface): void {
    this.deviceViewPort$.next(device);
  }

  public unmountIframe(): void {}
}
