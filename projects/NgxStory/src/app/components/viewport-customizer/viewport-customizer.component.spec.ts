import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewportCustomizerComponent } from './viewport-customizer.component';

describe('ViewportCustomizerComponent', () => {
  let component: ViewportCustomizerComponent;
  let fixture: ComponentFixture<ViewportCustomizerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewportCustomizerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewportCustomizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
