import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

import { IframeService } from '../iframe/iframe.service';
import { IframeViewportInterface, SelectOptionValuesInterface } from '../../shared/playground.model';

@Component({
  selector: 'ngx-story-viewport-customizer',
  templateUrl: './viewport-customizer.component.html',
  styleUrls: ['./viewport-customizer.component.scss']
})
export class ViewportCustomizerComponent implements OnInit, OnDestroy {
  public selectDevice: SelectOptionValuesInterface[];
  public form: FormGroup;

  public readonly subscriptions = new Subscription();

  public constructor(private iframeService: IframeService) {
    this.selectDevice = this.iframeService.getDevicesSelectOption();
  }

  public ngOnInit(): void {
    this.formBuild();
    this.formPatch(this.iframeService.getCurrentViewPort());

    this.handleSelectDevices();
  }

  public ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  private formBuild() {
    this.form = new FormGroup({
      device: new FormControl(null),
      width: new FormControl(null),
      height: new FormControl(null),
      orientationHorizontal: new FormControl(false)
    });
  }

  private formPatch(values: IframeViewportInterface) {
    if (!values) {
      return;
    }
    console.log({ values });

    this.form.patchValue(
      {
        width: values.width,
        height: values.height,
        orientationHorizontal: values.orientationHorizontal
      },
      { emitEvent: false }
    );

    !values.device && this.form.get('device').setValue(values, { emitEvent: false });
  }

  private handleSelectDevices() {
    this.subscriptions.add(
      this.form.get('device').valueChanges.subscribe((device: IframeViewportInterface) => {
        this.formPatch(device);
        this.setDevice();
      })
    );
    this.subscriptions.add(
      this.form.get('orientationHorizontal').valueChanges.subscribe(value => {
        this.setDevice({ orientationHorizontal: value });
      })
    );
  }

  private setDevice(device?: Partial<IframeViewportInterface>): void {
    const formValues = this.form.value;
    this.iframeService.setDevice({ ...formValues, ...device });
  }
}
